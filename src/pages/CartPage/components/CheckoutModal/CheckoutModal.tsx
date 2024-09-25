import styles from './CheckoutModal.module.scss';
import cn from 'classnames';

import React, { useRef } from 'react';

import { ButtonPrimary } from '../../../../components/buttons';
import { Input } from '../../../../components/inputs';
import { shippingOptions } from '../../../../utils/constants/dropdownOptions';

import { calculateOrderTotal } from '../../../../features/calculateOrderTotal';
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';
import { useCartContext } from '../../context/CartContext';

import {
  validateExpirationDate,
  validateCvc,
  validateCardNumber,
  validateEmail,
  validateName,
} from '../../../../utils/validation';

import { useTranslation } from 'react-i18next';
import { useValidator } from '../../../../hooks/useValidator';

type CheckoutModalProps = {
  onConfirm?: () => void;
  onReject?: () => void;
};

export const CheckoutModal = ({}: CheckoutModalProps) => {
  const { t } = useTranslation();
  const {
    cart,
    isCheckoutVisible: isVisible,
    setIsCheckoutVisible: setIsVisible,
  } = useCartContext();

  const totalCost = calculateOrderTotal(cart);

  const ref = useRef(null);

  useOnClickOutside(() => {
    if (isVisible) {
      setIsVisible(false);
    }
  }, ref);

  const firstNameValidator = useValidator(
    s => (validateName(s) ? null : t('cart.errors.name')),
    300,
  );

  const lastNameValidator = useValidator(
    s => (validateName(s) ? null : t('cart.errors.surname')),
    300,
  );

  const emailValidator = useValidator(s => (validateEmail(s) ? null : t('cart.errors.email')), 300);

  const cardNumberValidator = useValidator(
    s => (validateCardNumber(s) ? null : t('cart.errors.creditCard')),
    300,
  );

  const cvcValidator = useValidator(s => (validateCvc(s) ? null : t('cart.errors.cvv')), 300);

  const expDateValidator = useValidator(
    s => (validateExpirationDate(s) ? null : t('cart.errors.expiryDate')),
    300,
  );

  const handleConfirm = () => {
    const validators = [
      firstNameValidator,
      lastNameValidator,
      emailValidator,
      cardNumberValidator,
      cvcValidator,
      expDateValidator,
    ];

    for (const validator of validators) {
      validator.validateImmediately();
    }

    if (validators.every(validator => !validator.isError())) {
      setIsVisible(false);
      alert(t('cart.thanks'));
    }
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <div ref={ref} className={cn(styles.container, { [styles.isVisible]: isVisible })}>
      <form className={styles.form}>
        <Input.Text placeholder={t('cart.placeholders.name')} validator={firstNameValidator} />
        <Input.Text placeholder={t('cart.placeholders.surname')} validator={lastNameValidator} />
        <Input.Text placeholder={t('cart.placeholders.email')} validator={emailValidator} />

        <div className={styles.shipToMargin}>
          <Input.Dropdown label={t('cart.shipTo')} options={shippingOptions} />
        </div>

        <Input.Format
          label={t('cart.creditCard')}
          format="....-....-....-...."
          placeholder="X"
          charset={/[0-9]/}
          validator={cardNumberValidator}
        />

        <div className={styles.cvcAndExpDate}>
          <Input.Format
            label={t('cart.expiryDate')}
            format="../.."
            placeholder="X"
            charset={/[0-9]/}
            validator={expDateValidator}
          />

          <Input.Format
            label={t('cart.cvv')}
            format="..."
            placeholder="X"
            charset={/[0-9]/}
            validator={cvcValidator}
          />
        </div>
      </form>

      <div className={styles.spacer} />

      <div className={styles.final}>
        <div className={styles.total}>
          <p className={styles.totalSuperscript}>{t('cart.total')}</p>

          <h3 className={styles.totalPrice}>${totalCost}</h3>
        </div>

        <div className={styles.separator} />

        <div className={styles.buttons}>
          <ButtonPrimary title={t('buttons.confirm')} onClick={handleConfirm} />
          <ButtonPrimary title={t('buttons.returnToCart')} onClick={handleCancel} />
        </div>
      </div>
    </div>
  );
};

import styles from './CheckoutModal.module.scss';
import cn from 'classnames';

import React, { useMemo, useRef, useState } from 'react';

import { ButtonPrimary } from '../../../../components/buttons';
import { Input } from '../../../../components/inputs';
import { createShippingOptions } from '../../../../utils/constants/dropdownOptions';

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
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../../enums/RouteNames';

type CheckoutModalProps = {
  onConfirm?: () => void;
  onReject?: () => void;
};

export const CheckoutModal = ({}: CheckoutModalProps) => {
  const navigate = useNavigate();
  const [snoose, setSnoose] = useState(true);

  const { t } = useTranslation();

  const shippingOptions = useMemo(() => createShippingOptions(t), [t]);

  const {
    cart,
    clearCart,
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

  const firstNameValidator = useValidator(s => (validateName(s) ? '' : t('cart.errors.name')), 300);

  const lastNameValidator = useValidator(
    s => (validateName(s) ? '' : t('cart.errors.surname')),
    300,
  );

  const emailValidator = useValidator(s => (validateEmail(s) ? '' : t('cart.errors.email')), 300);

  const cardNumberValidator = useValidator(
    s => (validateCardNumber(s) ? '' : t('cart.errors.creditCard')),
    300,
  );

  const cvcValidator = useValidator(s => (validateCvc(s) ? '' : t('cart.errors.cvv')), 300);

  const expDateValidator = useValidator(
    s => (validateExpirationDate(s) ? '' : t('cart.errors.expiryDate')),
    300,
  );

  const handleConfirm = () => {
    setSnoose(false);

    const validators = [
      firstNameValidator,
      lastNameValidator,
      emailValidator,
      cardNumberValidator,
      cvcValidator,
      expDateValidator,
    ];

    if (validators.every(validator => !validator.error)) {
      setIsVisible(false);
      alert(t('cart.thanks'));
      clearCart();
      navigate(RouteNames.home);
    }
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <div className={cn(styles.checkoutModal, { [styles.isVisible]: isVisible })}>
      <div ref={ref} className={styles.container}>
        <form className={styles.form}>
          <Input.Text
            key={t('cart.placeholders.name')}
            placeholder={t('cart.placeholders.name')}
            error={snoose ? '' : firstNameValidator.error}
            onChange={firstNameValidator.setValue}
          />
          <Input.Text
            placeholder={t('cart.placeholders.surname')}
            error={snoose ? '' : lastNameValidator.error}
            onChange={lastNameValidator.setValue}
          />
          <Input.Text
            placeholder={t('cart.placeholders.email')}
            error={snoose ? '' : emailValidator.error}
            onChange={emailValidator.setValue}
          />

          <div className={styles.shipToMargin}>
            <Input.Dropdown label={t('cart.shipTo')} options={shippingOptions} />
          </div>

          <Input.Format
            label={t('cart.creditCard')}
            format="....-....-....-...."
            placeholder="X"
            charset={/[0-9]/}
            error={snoose ? '' : cardNumberValidator.error}
            onChange={cardNumberValidator.setValue}
          />

          <div className={styles.cvcAndExpDate}>
            <Input.Format
              label={t('cart.expiryDate')}
              format="../.."
              placeholder="X"
              charset={/[0-9]/}
              error={snoose ? '' : expDateValidator.error}
              onChange={expDateValidator.setValue}
            />

            <Input.Format
              label={t('cart.cvv')}
              format="..."
              placeholder="X"
              charset={/[0-9]/}
              error={snoose ? '' : cvcValidator.error}
              onChange={cvcValidator.setValue}
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
    </div>
  );
};

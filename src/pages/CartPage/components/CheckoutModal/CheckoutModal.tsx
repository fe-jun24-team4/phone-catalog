import styles from './CheckoutModal.module.scss';
import cn from 'classnames';

import React, { useRef, useState } from 'react';

import { ButtonPrimary } from '../../../../components/buttons';
import { Input } from '../../../../components/inputs';
import { shippingOptions } from '../../../../utils/constants/dropdownOptions';

import { calculateOrderTotal } from '../../../../features/calculateOrderTotal';
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';
import { useCartContext } from '../../context/CartContext';

import debounce from 'lodash.debounce';
import {
  validateExpirationDate,
  validateCvc,
  validateCardNumber,
  validateEmail,
  validateName,
} from '../../../../utils/validation';
import { useTranslation } from 'react-i18next';

type CheckoutModalProps = {
  onConfirm?: () => void;
  onReject?: () => void;
};

type Errors = {
  firstName: string;
  lastName: string;
  email: string;
  cardNumber: string;
  cardCvc: string;
  cardExpiration: string;
};

// TODO: disable confirm on errors
export const CheckoutModal = ({}: CheckoutModalProps) => {
  const { t } = useTranslation();
  const {
    cart,
    isCheckoutVisible: isVisible,
    setIsCheckoutVisible: setIsVisible,
  } = useCartContext();

  const [errors, setErrors] = useState<Errors>({
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    cardCvc: '',
    cardExpiration: '',
  });

  const totalCost = calculateOrderTotal(cart);

  const ref = useRef(null);

  useOnClickOutside(() => {
    if (isVisible) {
      setIsVisible(false);
    }
  }, ref);

  function debounceValidator(validator: (str: string) => boolean, error: Partial<Errors>) {
    return debounce((str: string) => {
      if (!validator(str)) {
        setErrors(prev => ({ ...prev, ...error }));
      }
    }, 300);
  }

  function handleChangeOf(field: keyof Errors, debouncedValidator: (str: string) => void) {
    return (str: string) => {
      setErrors(prev => ({ ...prev, [field]: '' }));

      debouncedValidator(str);
    };
  }

  const validateFirstNameDebounced = debounceValidator(validateName, {
    firstName: t('cart.errors.name'),
  });

  const validateLastNameDebounced = debounceValidator(validateName, {
    lastName: t('cart.errors.surname'),
  });

  const validateEmailDebounced = debounceValidator(validateEmail, {
    email: t('cart.errors.email'),
  });

  const validateCardNumberDebounced = debounceValidator(validateCardNumber, {
    cardNumber: t('cart.errors.creditCard'),
  });

  const validateCardCvcDebounced = debounceValidator(validateCvc, {
    cardCvc: t('cart.errors.cvv'),
  });

  const validateCardExpirationDebounced = debounceValidator(validateExpirationDate, {
    cardExpiration: t('cart.errors.expiryDate'),
  });

  const handleFirstNameChange = handleChangeOf('firstName', validateFirstNameDebounced);
  const handleLastNameChange = handleChangeOf('lastName', validateLastNameDebounced);
  const handleEmailChange = handleChangeOf('email', validateEmailDebounced);
  const handleCardNumberChange = handleChangeOf('cardNumber', validateCardNumberDebounced);
  const handleCvcChange = handleChangeOf('cardCvc', validateCardCvcDebounced);
  const handleExpirationDateChange = handleChangeOf(
    'cardExpiration',
    validateCardExpirationDebounced,
  );

  return (
    <div ref={ref} className={cn(styles.container, { [styles.isVisible]: isVisible })}>
      <form className={styles.form}>
        <Input.Text
          placeholder={t('cart.placeholders.name')}
          error={errors.firstName}
          onChange={handleFirstNameChange}
        />
        <Input.Text
          placeholder={t('cart.placeholders.surname')}
          error={errors.lastName}
          onChange={handleLastNameChange}
        />
        <Input.Text
          placeholder={t('cart.placeholders.email')}
          error={errors.email}
          onChange={handleEmailChange}
        />

        <div className={styles.shipToMargin}>
          <Input.Dropdown label={t('cart.shipTo')} options={shippingOptions} />
        </div>

        <Input.Format
          label={t('cart.creditCard')}
          format="....-....-....-...."
          placeholder="X"
          charset={/[0-9]/}
          error={errors.cardNumber}
          onChange={handleCardNumberChange}
        />

        <div className={styles.cvcAndExpDate}>
          <Input.Format
            label={t('cart.expiryDate')}
            format="../.."
            placeholder="X"
            charset={/[0-9]/}
            error={errors.cardExpiration}
            onChange={handleExpirationDateChange}
          />

          <Input.Format
            label={t('cart.cvv')}
            format="..."
            placeholder="X"
            charset={/[0-9]/}
            error={errors.cardCvc}
            onChange={handleCvcChange}
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
          <ButtonPrimary title={t('buttons.confirm')} onClick={() => setIsVisible(false)} />
          <ButtonPrimary title={t('buttons.returnToCart')} onClick={() => setIsVisible(false)} />
        </div>
      </div>
    </div>
  );
};

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
    firstName: 'First name is required',
  });

  const validateLastNameDebounced = debounceValidator(validateName, {
    lastName: 'Last name is required',
  });

  const validateEmailDebounced = debounceValidator(validateEmail, { email: 'Invalid E-mail' });

  const validateCardNumberDebounced = debounceValidator(validateCardNumber, {
    cardNumber: 'Invalid credit card number',
  });

  const validateCardCvcDebounced = debounceValidator(validateCvc, { cardCvc: 'Invalid CVC code' });

  const validateCardExpirationDebounced = debounceValidator(validateExpirationDate, {
    cardExpiration: 'Invalid expiration date',
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
          placeholder="First name"
          error={errors.firstName}
          onChange={handleFirstNameChange}
        />
        <Input.Text
          placeholder="Last name"
          error={errors.lastName}
          onChange={handleLastNameChange}
        />
        <Input.Text
          placeholder="email@domain.com"
          error={errors.email}
          onChange={handleEmailChange}
        />

        <div className={styles.shipToMargin}>
          <Input.Dropdown label="Ship to:" options={shippingOptions} />
        </div>

        <Input.Format
          label="Credit card number"
          format="....-....-....-...."
          placeholder="X"
          charset={/[0-9]/}
          error={errors.cardNumber}
          onChange={handleCardNumberChange}
        />

        <div className={styles.cvcAndExpDate}>
          <Input.Format
            label="Expiration date"
            format="../.."
            placeholder="X"
            charset={/[0-9]/}
            error={errors.cardExpiration}
            onChange={handleExpirationDateChange}
          />

          <Input.Format
            label="CVC"
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
          <p className={styles.totalSuperscript}>Your total is</p>

          <h3 className={styles.totalPrice}>${totalCost}</h3>
        </div>

        <div className={styles.separator} />

        <div className={styles.buttons}>
          <ButtonPrimary title="Confirm" onClick={() => setIsVisible(false)} />
          <ButtonPrimary title="Return to Cart" onClick={() => setIsVisible(false)} />
        </div>
      </div>
    </div>
  );
};

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
import { validateCreditCard, validateEmail, validateName } from '../../../../utils/validation';

type CheckoutModalProps = {
  onConfirm?: () => void;
  onReject?: () => void;
};

// TODO: disable confirm on errors
export const CheckoutModal = ({}: CheckoutModalProps) => {
  const {
    cart,
    isCheckoutVisible: isVisible,
    setIsCheckoutVisible: setIsVisible,
  } = useCartContext();

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    creditCardNumber: '',
  });

  const totalCost = calculateOrderTotal(cart);

  const ref = useRef(null);

  useOnClickOutside(() => {
    if (isVisible) {
      setIsVisible(false);
    }
  }, ref);

  const validateFirstNameDebounced = debounce((firstName: string) => {
    if (!validateName(firstName)) {
      setErrors(prev => ({ ...prev, firstName: 'First name is required' }));
    }
  }, 300);

  const validateLastNameDebounced = debounce((lastName: string) => {
    if (!validateName(lastName)) {
      setErrors(prev => ({ ...prev, lastName: 'Last name is required' }));
    }
  }, 300);

  const validateEmailDebounced = debounce((email: string) => {
    if (!validateEmail(email)) {
      setErrors(prev => ({ ...prev, email: 'Invalid E-mail' }));
    }
  }, 300);

  const validateCreditCardNumberDebounced = debounce((number: string) => {
    if (!validateCreditCard(number)) {
      setErrors(prev => ({ ...prev, creditCardNumber: 'Invalid card number' }));
    }
  }, 300);

  const handleFirstNameChange = (firstName: string) => {
    setErrors(prev => ({ ...prev, firstName: '' }));

    validateFirstNameDebounced(firstName);
  };

  const handleLastNameChange = (lastName: string) => {
    setErrors(prev => ({ ...prev, lastName: '' }));

    validateLastNameDebounced(lastName);
  };

  const handleEmailChange = (email: string) => {
    setErrors(prev => ({ ...prev, email: '' }));

    validateEmailDebounced(email);
  };

  const handleCreditCardChange = (number: string) => {
    setErrors(prev => ({ ...prev, creditCardNumber: '' }));

    validateCreditCardNumberDebounced(number);
  };

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
        <Input.Dropdown label="Ship to:" options={shippingOptions} />
        <Input.CreditCard
          label="Credit card info"
          error={errors.creditCardNumber}
          onChange={handleCreditCardChange}
        />
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

import styles from './CheckoutModal.module.scss';
import cn from 'classnames';

import React, { useEffect, useRef, useState } from 'react';

import { ButtonPrimary } from '../../../../components/buttons';
import { Input } from '../../../../components/inputs';
import { shippingOptions } from '../../../../utils/constants/dropdownOptions';

import { calculateOrderTotal } from '../../../../features/calculateOrderTotal';
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';
import { useCartContext } from '../../context/CartContext';
import debounce from 'lodash.debounce';

type CheckoutModalProps = {
  onConfirm?: () => void;
  onReject?: () => void;
};

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

  const validateFirstNameDebounced = debounce((name: string) => {
    if (!name) {
      setErrors(prev => ({ ...prev, firstName: 'First name is required' }));
    }
  });

  const validate;

  return (
    <div ref={ref} className={cn(styles.container, { [styles.isVisible]: isVisible })}>
      <form className={styles.form}>
        <Input.Text placeholder="First name" error={errors.firstName} onChange={} />
        <Input.Text placeholder="Last name" error={errors.lastName} />
        <Input.Text placeholder="email@domain.com" error={errors.email} />
        <Input.Dropdown label="Ship to:" options={shippingOptions} />
        <Input.CreditCard label="Credit card info" error={errors.creditCardNumber} />
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

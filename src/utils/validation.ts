export function validateName(name: string) {
  return Boolean(name);
}

export function validateEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const match = email.match(emailRegex);

  return Boolean(match);
}

export function validateCardNumber(cardNumber: string) {
  const creditCardRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  const match = cardNumber.match(creditCardRegex);

  return Boolean(match);
}

export function validateCvc(cvc: string) {
  const cvcRegex = /^\d{3}$/;
  const match = cvc.match(cvcRegex);

  return Boolean(match);
}

export function validateExpirationDate(expDate: string) {
  const expDateRegex = /^\d{2}\/\d{2}$/;
  const match = expDate.match(expDateRegex);

  return Boolean(match);
}

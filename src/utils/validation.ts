export function validateName(name: string) {
  return Boolean(name);
}

export function validateEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const match = email.match(emailRegex);

  return Boolean(match);
}

export function validateCreditCard(cardDigits: string) {
  const creditCardRegex = /^\d{16}$/;
  const match = cardDigits.match(creditCardRegex);

  return Boolean(match);
}

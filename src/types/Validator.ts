import debounce from 'lodash.debounce';

export type ValidatorFunc = (str: string) => string | null;

export class Validator {
  public validateImmediately;

  public validateDebounced;

  public value = '';

  public error: string | null | undefined = undefined;

  constructor(validator: ValidatorFunc, wait: number) {
    this.validateImmediately = () => {
      this.error = validator(this.value);
    };

    this.validateDebounced = debounce(this.validateImmediately, wait);
  }

  isError() {
    if (this.error === undefined) {
      this.validateImmediately();
    }

    return Boolean(this.error);
  }

  setValue(value: string) {
    this.value = value;

    this.validateDebounced();
  }
}

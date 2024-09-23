export enum OptionType {
  default,
  placeholder,
}

type Option<T> = {
  value: T;
  type?: OptionType;
};

type OptionsMap<T> = { [key: string]: Option<T> };

export class Options<T> {
  public items = {} as OptionsMap<T>;

  constructor(options: OptionsMap<T>) {
    this.items = options;
  }

  get default() {
    const entries = Object.entries(this.items);

    const defaultOption = entries.find(([_, option]) => option.type === OptionType.default);

    if (defaultOption) {
      return defaultOption;
    }

    const placeholderOption = entries.find(([_, option]) => option.type === OptionType.placeholder);

    if (placeholderOption) {
      return placeholderOption;
    }

    return entries[0] ?? null;
  }

  get defaultValue() {
    return this.default[1].value;
  }

  get visible() {
    const entries = Object.entries(this.items);

    return entries.filter(([_, option]) => option.type !== OptionType.placeholder);
  }

  clone(newDefault: T) {
    const result = new Options<T>({ ...this.items });

    for (const key in result.items) {
      const value = result.items[key];

      if (value.type === OptionType.default) {
        result.items[key] = { ...value, type: undefined };
      }

      if (value.value === newDefault) {
        result.items[key] = { ...value, type: OptionType.default };
      }
    }

    return result;
  }
}

export enum OptionType {
  Default,
  Placeholder,
}

export type Option<T> = {
  key: string;
  value: T;
  type?: OptionType;
};

export class Options<T> {
  public label: string;

  public items: Option<T>[] = [];

  constructor(label: string, options: Option<T>[]) {
    this.label = label;
    this.items = options;
  }

  get defaultOption() {
    return this.items.find(option => option.type === OptionType.Default);
  }

  get placeholderOption() {
    return this.items.find(option => option.type === OptionType.Default);
  }

  get initialOption() {
    return this.defaultOption ?? this.placeholderOption;
  }

  get withoutPlaceholder() {
    return this.items.filter(option => option.type !== OptionType.Placeholder);
  }
}

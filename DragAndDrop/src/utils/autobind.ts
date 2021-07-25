// Autobinder
export function autobind(_: any, _2: string, propDesc: PropertyDescriptor) {
  return {
    configurable: propDesc.configurable,
    enumerable: propDesc.enumerable,
    get() {
      return propDesc.value.bind(this);
    },
  };
}

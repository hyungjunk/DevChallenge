export function autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;
  return {
    configurable: descriptor.configurable,
    enumerable: descriptor.enumerable,
    get() {
      return originalMethod.bind(this);
    },
  };
}

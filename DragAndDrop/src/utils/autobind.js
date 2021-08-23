// Autobinder
export function autobind(_, _2, propDesc) {
    return {
        configurable: propDesc.configurable,
        enumerable: propDesc.enumerable,
        get() {
            return propDesc.value.bind(this);
        },
    };
}

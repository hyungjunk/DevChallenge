export function isRequired(validatableInput) {
    if (validatableInput.required) {
        return validatableInput.value.toString().trim().length !== 0;
    }
    return true;
}
export function isLongerThan(validatableInput) {
    if (validatableInput.minLength != null &&
        typeof validatableInput.value === "string") {
        return validatableInput.value.length >= validatableInput.minLength;
    }
    return true;
}
export function isShorterThan(validatableInput) {
    if (validatableInput.maxLength != null &&
        typeof validatableInput.value === "string") {
        return validatableInput.value.length <= validatableInput.maxLength;
    }
    return true;
}
export function isBiggerThan(validatableInput) {
    if (validatableInput.min != null &&
        typeof validatableInput.value === "number") {
        return validatableInput.value >= validatableInput.min;
    }
    return true;
}
export function isSmallerThan(validatableInput) {
    if (validatableInput.max != null &&
        typeof validatableInput.value === "number") {
        return validatableInput.value <= validatableInput.max;
    }
    return true;
}

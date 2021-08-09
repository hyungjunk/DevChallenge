import { allPass } from "ramda";
function isRequired(validatableInput) {
    if (validatableInput.required) {
        return validatableInput.value.toString().trim().length !== 0;
    }
    return true;
}
function isLongerThan(validatableInput) {
    if (validatableInput.minLength != null &&
        typeof validatableInput.value === "string") {
        return validatableInput.value.length >= validatableInput.minLength;
    }
    return true;
}
function isShorterThan(validatableInput) {
    if (validatableInput.maxLength != null &&
        typeof validatableInput.value === "string") {
        return validatableInput.value.length <= validatableInput.maxLength;
    }
    return true;
}
function isBiggerThan(validatableInput) {
    if (validatableInput.min != null &&
        typeof validatableInput.value === "number") {
        return validatableInput.value >= validatableInput.min;
    }
    return true;
}
function isSmallerThan(validatableInput) {
    if (validatableInput.max != null &&
        typeof validatableInput.value === "number") {
        return validatableInput.value <= validatableInput.max;
    }
    return true;
}
export function validate(validatableInput) {
    return allPass([
        isRequired,
        isLongerThan,
        isShorterThan,
        isBiggerThan,
        isSmallerThan,
    ])(validatableInput);
}

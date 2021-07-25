import { allPass } from "ramda";
import { Validatable } from "../types/index";

function isRequired(validatableInput: Validatable): boolean {
  if (validatableInput.required) {
    return validatableInput.value.toString().trim().length !== 0;
  }
  return true;
}

function isLongerThan(validatableInput: Validatable) {
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === "string"
  ) {
    return validatableInput.value.length >= validatableInput.minLength;
  }
  return true;
}
function isShorterThan(validatableInput: Validatable) {
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  ) {
    return validatableInput.value.length <= validatableInput.maxLength;
  }
  return true;
}

function isBiggerThan(validatableInput: Validatable) {
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    return validatableInput.value >= validatableInput.min;
  }
  return true;
}
function isSmallerThan(validatableInput: Validatable) {
  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    return validatableInput.value <= validatableInput.max;
  }
  return true;
}

export function validate(validatableInput: Validatable) {
  return allPass([
    isRequired,
    isLongerThan,
    isShorterThan,
    isBiggerThan,
    isSmallerThan,
  ])(validatableInput);
}

import {
  createFormValidation,
  ValidationConstraints,
  Validators
} from "lc-form-validation";

const hotelFormValidationConstraints: ValidationConstraints = {
  fields: {
    name: [{ validator: Validators.required }],
    picture: [{ validator: Validators.required }],
    description: [{ validator: Validators.required }],
    city: [{ validator: Validators.required }]
  }
};

export const hotelFormValidation = createFormValidation(
  hotelFormValidationConstraints
);

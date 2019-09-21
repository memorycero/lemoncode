import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";
import { FieldValidationResult } from "lc-form-validation";

export const createDefaultHotel = ()  : HotelEntityVm => ({
    id: '0',
    picture: '',
    name: '',
    description: '',
    rating: 3,
    address: '',
    city: '',
  });

  export interface HotelFormErrors {
    name: FieldValidationResult;
    picture: FieldValidationResult;
    description: FieldValidationResult;
    city: FieldValidationResult;
  }

  export const createDefaultHotelFormErrors = (): HotelFormErrors => ({
    name: new FieldValidationResult(),
    picture: new FieldValidationResult(),
    description: new FieldValidationResult(),
    city: new FieldValidationResult(),
  });
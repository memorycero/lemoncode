import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";

export const createDefaultHotel = ()  : HotelEntityVm => ({
    id: '0',
    picture: '',
    name: '',
    description: '',
    rating: 3,
    address: '',
    city: '',
  });
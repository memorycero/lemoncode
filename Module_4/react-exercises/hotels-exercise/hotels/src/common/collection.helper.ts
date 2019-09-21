import { HotelEntityApi } from  '../api';
import {HotelEntityVm} from '../pods/hotel-collection/hotel-collection.vm';
import {baseApiUrl} from 'core';


export const mapFromApiToVm = (apiEntity: HotelEntityApi) : HotelEntityVm => ({ 
  id: apiEntity.id, 
  picture: `${baseApiUrl}${apiEntity.thumbNailUrl}`, 
  name: apiEntity.name, 
  rating: apiEntity.hotelRating, 
  description: apiEntity.shortDescription, 
  address: apiEntity.address1, 
  city: apiEntity.city,
});

export const mapFromApiCollectionToVmCollection = (apiEntityCollection : HotelEntityApi[]) : HotelEntityVm[] => 
apiEntityCollection.map((apiEntity) => mapFromApiToVm(apiEntity));
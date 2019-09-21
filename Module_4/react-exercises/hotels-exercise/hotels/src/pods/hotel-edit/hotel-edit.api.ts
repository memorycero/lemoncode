import Axios, { AxiosError } from "axios";
import {baseApiUrl} from 'core'

export interface HotelEntityApi {
  id: string;
  type: string;
  name: string;
  created: Date;
  modified: Date;
  address1: string,
  airportCode: string;
  amenityMask: number;
  city: string;
  confidenceRating: number;
  countryCode: string;
  deepLink: string;
  highRate: number;
  hotelId: number;
  hotelInDestination: boolean;
  hotelRating: number;
  location: {
    latitude: number;
    longitude: number;
  },
  locationDescription: string;
  lowRate: number;
  metadata: {
    path: string;
  },
  postalCode: number;
  propertyCategory: number;
  proximityDistance: number;
  proximityUnit: string;
  rateCurrencyCode: string;
  shortDescription: string;
  stateProvinceCode: string;
  thumbNailUrl: string;
  tripAdvisorRating: number;
  tripAdvisorRatingUrl: string;  
}

const getHotelsUrl = `${baseApiUrl}/api/hotels`;
const getHotelByIdUrl = `${baseApiUrl}/api/hotels?id=`;

export const getHotelCollection = () : Promise<HotelEntityApi[]> => {  
  const promise = new Promise<HotelEntityApi[]>((resolve, reject) => {
    setTimeout(() => {
      Axios.get<HotelEntityApi[]>(getHotelsUrl)
      .then((response) => resolve(response.data))
      .catch((error: AxiosError) => {
        reject(error);
        alert(getMessageError(error));
      });
    }, 2000);
  });
  return promise;
}

export const getHotelById = (id: string) : Promise<HotelEntityApi> => {  
  const promise = new Promise<HotelEntityApi>((resolve, reject) => {
    setTimeout(() => {
      Axios.get<HotelEntityApi>(`${getHotelByIdUrl}${id}`)
      .then((response) => resolve(response.data[0]))
      .catch((error: AxiosError) => {
        reject(error);
        alert(getMessageError(error));
      });
    }, 2000);
  });
  return promise;
}

const getMessageError = (error: AxiosError) : string => {
    if(error.response){
      switch (error.response.status) {
        case 404: return 'Data not found';
        case 503: return 'Service unavailable';
      }
    }
    return 'Request cannot be processed';
}
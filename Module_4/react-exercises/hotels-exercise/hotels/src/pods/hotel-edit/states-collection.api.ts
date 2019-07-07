import {baseApiUrl} from 'core'
import Axios from 'axios';

export interface StateEntityApi {
    name: string;
    abbreviation: string;
}

const getStatesUrl = `${baseApiUrl}/api/states`;

export const getStatesCollection = () : Promise<StateEntityApi[]> => {
  const promise = new Promise<StateEntityApi[]>((resolve, reject) => 
    Axios.get<StateEntityApi[]>(getStatesUrl).then(
      (response) => resolve(response.data)
    ));
  return promise;  
}
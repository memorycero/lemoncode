import { StateEntityVm } from "./states-collection.vm";
import { StateEntityApi } from "./states-collection.api";

export const mapStateEntityApiToVm = (stateEntityApi: StateEntityApi) : StateEntityVm => (
    {
        name: stateEntityApi.name,
        abbreviation: stateEntityApi.abbreviation
    }
);

export const mapStateEntityApiToVmCollection = (stateEntityApiCollection: StateEntityApi[]) : StateEntityVm[] => 
     stateEntityApiCollection.map((stateEntityApi) => mapStateEntityApiToVm(stateEntityApi));



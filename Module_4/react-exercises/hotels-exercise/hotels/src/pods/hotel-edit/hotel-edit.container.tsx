import { HotelEditComponent } from "./hotel-edit.component";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";
import { mapFromApiToVm } from '../../common/collection.helper';
import {getHotelCollection} from '../hotel-collection/hotel-collection.api';

interface ParamProps {
    id: string;
}

const useHotelEdit = (id: string) => {
    const [hotel, setHotel] = React.useState<HotelEntityVm>();

    const loadHotel = () => {
        getHotelCollection().then(result => {
            const hotelVm = result.find((element) => element.id === id);
            setHotel(mapFromApiToVm(hotelVm));
            console.log(hotelVm);
        })
    }

    return { hotel, loadHotel};
} 

interface Props extends RouteComponentProps<ParamProps> { }

export const HotelEditionContainerInner = (props: Props) => {
    const {id} = props.match.params;
    const {hotel, loadHotel} = useHotelEdit(id);

    React.useEffect(() => {
        loadHotel();
      }, [])

    return <HotelEditComponent hotel={hotel} />;
}

export const HotelEditionContainer = withRouter<Props>(HotelEditionContainerInner);

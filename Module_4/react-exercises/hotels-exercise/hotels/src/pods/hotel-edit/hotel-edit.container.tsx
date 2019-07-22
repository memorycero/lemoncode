import { HotelEditComponent } from "./hotel-edit.component";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { mapFromApiToVm } from '../../common/collection.helper';
import { getHotelById } from '../hotel-collection/hotel-collection.api';
import { trackPromise } from "react-promise-tracker";
import { LoadingSpinerComponent } from "../../common/components/spinner";
import { createDefaultHotel } from "../hotel-edit/hotel-edit.vm";

interface ParamProps {
    id: string;
}

interface Props extends RouteComponentProps<ParamProps> { }

export const HotelEditionContainerInner = (props: Props) => {
    const [hotel, setHotel] = React.useState(createDefaultHotel());
    const { id } = props.match.params;

    const loadHotel = () => {
        trackPromise(getHotelById(id).then(result => {
            setHotel(mapFromApiToVm(result));
        }));
    }

    React.useEffect(() => {
        loadHotel();
    }, [])

    return (
        <>
            <LoadingSpinerComponent>
                <HotelEditComponent hotel={hotel} />
            </LoadingSpinerComponent>
        </>
    )
}

export const HotelEditionContainer = withRouter<Props, any>(HotelEditionContainerInner);

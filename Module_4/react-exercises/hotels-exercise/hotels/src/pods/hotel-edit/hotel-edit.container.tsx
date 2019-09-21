import { HotelEditComponent } from "./hotel-edit.component";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { mapFromApiToVm } from '../../common/collection.helper';
import { getHotelById } from '../../api';
import { trackPromise } from "react-promise-tracker";
import { LoadingSpinerComponent } from "../../common/components/spinner";
import { createDefaultHotel, createDefaultHotelFormErrors, HotelFormErrors } from "../hotel-edit/hotel-edit.vm";
import { hotelFormValidation } from "./hotel-edit.validation"

interface ParamProps {
    id: string;
}

interface Props extends RouteComponentProps<ParamProps> { }

export const HotelEditionContainerInner = (props: Props) => {
    const [hotel, setHotel] = React.useState(createDefaultHotel());
    const { id } = props.match.params;
    const [hotelFormErrors, setHotelFormErrors] = React.useState<HotelFormErrors>(
        createDefaultHotelFormErrors()
    );

    const loadHotel = () => {
        trackPromise(getHotelById(id).then(result => {
            setHotel(mapFromApiToVm(result));
        }));
    }

    const updateField = (field, value) => {
        setHotel({
            ...hotel,
            [field]: value
        })
        hotelFormValidation.validateField(hotel, field, value)
            .then(fieldValidationResult => {
                setHotelFormErrors({
                    ...hotelFormErrors,
                    [field]: fieldValidationResult
                });
            });
    }

    const save = () => {
        alert('Hotel saved correctly !!');
    }

    React.useEffect(() => {
        loadHotel();
    }, [])

    return (
        <>
            <LoadingSpinerComponent>
                <HotelEditComponent
                    hotel={hotel}
                    onFieldUpdate={updateField}
                    onSave={save}
                    hotelFormErrors={hotelFormErrors} />
            </LoadingSpinerComponent>
        </>
    )
}

export const HotelEditionContainer = withRouter<Props, any>(HotelEditionContainerInner);

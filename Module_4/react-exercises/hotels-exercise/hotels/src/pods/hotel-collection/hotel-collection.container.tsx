import * as React from "react";
import { HotelCollectionComponent } from "./hotel-collection.component";
import { HotelEntityVm } from "./hotel-collection.vm";
import { routesLinks } from "core";
import { getHotelCollection } from "./hotel-collection.api";
import { mapFromApiCollectionToVmCollection } from "common";
import { RouteComponentProps, withRouter } from "react-router";
import { LoadingSpinerComponent } from "../../common/components/spinner";
import { trackPromise } from "react-promise-tracker";

interface Props extends RouteComponentProps { }

const useHotelCollection = () => {
  const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>(
    []
  );

  const loadHotelCollection = () =>
    trackPromise(getHotelCollection().then(result =>
      setHotelCollection(mapFromApiCollectionToVmCollection(result))
    ));

  return { hotelCollection, loadHotelCollection };
};

export const HotelCollectionContainerInner = (props: Props) => {
  const { hotelCollection, loadHotelCollection } = useHotelCollection();
  const { history } = props;

  React.useEffect(() => {
    loadHotelCollection();

    return () => { console.log('do your cleanup here') }
  }, []);

  const navigateToHotel = (id: string) => {
    history.push(routesLinks.hotelEdit(id));
  }

  return (
    <>
      <LoadingSpinerComponent>
      <HotelCollectionComponent hotelCollection={hotelCollection} onEditHotel={navigateToHotel} />
      </LoadingSpinerComponent>
    </>
      
  )
};

export const HotelCollectionContainer = withRouter<Props, any>(HotelCollectionContainerInner);

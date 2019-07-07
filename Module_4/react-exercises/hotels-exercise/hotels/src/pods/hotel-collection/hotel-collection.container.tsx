import * as React from "react";
import { HotelCollectionComponent } from "./hotel-collection.component";
import { HotelEntityVm } from "./hotel-collection.vm";
import { routesLinks } from "core";
import { getHotelCollection } from "./hotel-collection.api";
import { mapFromApiCollectionToVmCollection } from "common";
import { RouteComponentProps, withRouter } from "react-router";

interface Props extends RouteComponentProps {}

const useHotelCollection = () => {
  const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>(
    []
  );

  const loadHotelCollection = () =>
    getHotelCollection().then(result =>
      setHotelCollection(mapFromApiCollectionToVmCollection(result))
    );

  return { hotelCollection, loadHotelCollection };
};

export const HotelCollectionContainerInner = (props: Props) => {
  const {hotelCollection, loadHotelCollection} = useHotelCollection();
  const {history} = props;

  React.useEffect(() => {
    loadHotelCollection();

    return () => {console.log('do your cleanup here')}
  }, []);

  const navigateToHotel = (id: string) => {
    history.push(routesLinks.hotelEdit(id));
  }

  return <HotelCollectionComponent hotelCollection={hotelCollection} onEditHotel={navigateToHotel}/>;
};

export const HotelCollectionContainer = withRouter<Props>(HotelCollectionContainerInner);

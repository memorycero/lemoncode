import * as React from "react";
import { withStyles, createStyles, WithStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { HotelEntityVm } from "./hotel-collection.vm";
import { HotelCard } from "./components/hotel-card.component"; // on next step we will create this component

interface Props {  
  hotelCollection: HotelEntityVm[];
  onEditHotel: (id: string) => void;
}

const useStyles = makeStyles((theme:Theme) => createStyles({
    listLayout: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between"
    }
  }),
);

export const HotelCollectionComponent = (props: Props) => {
  const { hotelCollection, onEditHotel} = props;

  const classes = useStyles();

  return (
    <div className={classes.listLayout}>
      {hotelCollection.map(hotel => (
        <HotelCard hotel={hotel} key={hotel.id} onEditHotelClick={onEditHotel}/>
      ))}
    </div>
  );
};

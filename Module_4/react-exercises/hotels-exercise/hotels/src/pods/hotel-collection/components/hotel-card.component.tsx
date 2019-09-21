import * as React from "react";
import Card from "@material-ui/core/Card";
import { HotelEntityVm } from "../hotel-collection.vm";
import {Theme, makeStyles} from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/edit";
import DeleteIcon from "@material-ui/icons/delete";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActions
} from "@material-ui/core";
import {createStyles } from "@material-ui/core/styles";

interface Props {
  hotel: HotelEntityVm;
  onEditHotelClick: (id:string) => void;
}

const useStyles = makeStyles((theme : Theme)  =>
  createStyles({
    card: {
      width: "500px",
      marginTop: theme.spacing(1),
    }
  })
);

export const HotelCard = (props: Props) => {
  const {hotel, onEditHotelClick} = props;

  const classes = useStyles({});

  const handleOnEditHotelClick = () => {
    onEditHotelClick(hotel.id);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label="Hotel">{hotel.rating}</Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={hotel.name}
        subheader={hotel.address}
      />
      <CardContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <CardMedia
            image={hotel.picture}
            title={hotel.name}
            style={{ height: 0, paddingTop: "56.25%" }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {hotel.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Add to favorites" onClick={handleOnEditHotelClick}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

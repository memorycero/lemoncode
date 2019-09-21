import * as React from "react";
import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";
import { CardMedia, Card, Button, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { TextFieldForm } from "common/components/text-field";
import { HotelFormErrors } from "./hotel-edit.vm";

interface Props {
  hotel: HotelEntityVm;
  onSave: () => void;
  onFieldUpdate: (field, value) => void;
  hotelFormErrors: HotelFormErrors;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    card: {
      maxWidth: '100%',
    },
    media: {
      paddingTop: '50%', // 16:9
    },
    button: {
      margin: theme.spacing(1),
    },
    rating: {
      marginLeft: '5px',
    }
  })
);

export const HotelEditComponent = (props: Props) => {
  const { hotel, onSave, onFieldUpdate, hotelFormErrors } = props;
  const classes = useStyles({});

  const handleOnSaveHotel = () => {
    onSave();
  }

  const handleOnUpdateField = (fieldId: keyof HotelEntityVm) => e => {
    onFieldUpdate(fieldId, e.target.value);
  }
  
  return (
    <>
      <TextFieldForm
        label="Name"
        name="name"
        value={hotel.name}
        onChange={onFieldUpdate}
        error={hotelFormErrors.name.errorMessage}
      />
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={hotel.picture}
          title={hotel.name}
        />
      </Card>
      <TextFieldForm
        label="Image url"
        name="picture"
        value={hotel.picture}
        onChange={onFieldUpdate}
        error={hotelFormErrors.picture.errorMessage}
      />
      <TextFieldForm
        label="Description"
        name="description"
        value={hotel.description}
        multiline={true}
        onChange={onFieldUpdate}
        error={hotelFormErrors.description.errorMessage}
      />
      <TextFieldForm
        name="city"
        label="City"
        value={hotel.city}
        onChange={onFieldUpdate}
        error={hotelFormErrors.city.errorMessage}
      />
      <div className={classes.rating}>
        <Typography component="legend">Rating</Typography>
        <Rating
          name="rating"
          value={hotel.rating}
          size="large"
          onChange={handleOnUpdateField('rating')}
        />
      </div>
      <Button variant="contained" color="primary" className={classes.button} onClick={handleOnSaveHotel}>
        Save
      </Button>
    </>
  )
}
import * as React from "react";
import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";
import { TextField, CardMedia, Card, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface Props {
  hotel: HotelEntityVm;
}

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '50%',
    },
    card: {
      maxWidth: '50%',
    },
    media: {
      paddingTop: '50%', // 16:9
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

export const HotelEditComponent = (props: Props) => {
  const { hotel } = props;
  const classes = useStyles({});

  React.useEffect(() => {
    
  }, [])
  return (
    <>
      <TextField
        id="name"
        className={classes.textField}
        label="Name"
        style={{ margin: 8 }}
        value={hotel.name}
        fullWidth
        margin="normal"
      />
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={hotel.picture}
          title={hotel.name}
        />
      </Card>
      <TextField
        id="image-url"
        className={classes.textField}
        label="Image url"
        style={{ margin: 8 }}
        value={hotel.picture}
        fullWidth
        margin="normal"
      />
      <TextField
        id="description"
        label="Description"
        value={hotel.description}
        multiline
        fullWidth
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="city"
        className={classes.textField}
        label="City"
        style={{ margin: 8 }}
        value={hotel.city}
        margin="normal"
      />
      <Button variant="contained" color="primary" className={classes.button}>
        Save
      </Button>
    </>
  )
}
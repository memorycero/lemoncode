import * as React from "react";
import { HotelEntityVm } from "../hotel-collection/hotel-collection.vm";
import { TextField, CardMedia, Card, InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { StateEntityVm } from "./states-collection.vm";
import { getStatesCollection } from "./states-collection.api";
import { mapStateEntityApiToVmCollection } from "./states-collection.mapper";

interface Props {
  hotel: HotelEntityVm;
}

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
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
  const [values, setValues] = React.useState({ age: '', name: 'hai' });
  const [states, setStates] = React.useState<StateEntityVm[]>([]);
  const classes = useStyles();

  React.useEffect(() => {
    getStatesCollection().then((result) => {
      const statesCollectionVm = mapStateEntityApiToVmCollection(result["states"]);
      setStates(statesCollectionVm);
    });
  }, [])
  return (
    <>
    <h1>Edit hotel: {hotel.name}</h1>
    </>
    // <>
    //   <TextField
    //     id="name"
    //     className={classes.textField}
    //     label="Name"
    //     style={{ margin: 8 }}
    //     placeholder={hotel.name}
    //     fullWidth
    //     margin="normal"
    //     InputLabelProps={{
    //       shrink: true,
    //     }}
    //   />
    //   <Card className={classes.card}>
    //     <CardMedia
    //       className={classes.media}
    //       image={hotel.picture}
    //       title={hotel.name}
    //     />
    //   </Card>
    //   <TextField
    //     id="image-url"
    //     className={classes.textField}
    //     label="Image url"
    //     style={{ margin: 8 }}
    //     placeholder={hotel.picture}
    //     fullWidth
    //     margin="normal"
    //     InputLabelProps={{
    //       shrink: true,
    //     }}
    //   />
    //   <InputLabel htmlFor="city">City</InputLabel>
    //   <Select
    //     value={values.age}
    //     inputProps={{
    //       name: 'city',
    //       id: 'city',
    //     }}
    //   >
    //     {
    //       states.map((state) => 
    //         <MenuItem value={state.name}>{state.name}</MenuItem>
    //       )
    //     }
    //   </Select>
    //   <Button variant="contained" color="primary" className={classes.button}>
    //     Save
    //   </Button>
    // </>
  )

}
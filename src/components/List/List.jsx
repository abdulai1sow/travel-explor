import React, {useState} from "react";
import { CirclarProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles';

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState();

  return
  <div className={classes.container}>
    <Typography variant="h4">
      Resturants, Hotels & Attractions arount you
    </Typography>
    <FormControl className={classes.formControl}>
      <InputLabel>Type</InputLabel>
      <Select value={""} onChange={}>
        <ManuItem value="resturants"> Resturants</ManuItem>
        <ManuItem value="hotels"> Hotels</ManuItem>
        <ManuItem value="attractions"> Attractions</ManuItem>
      </Select>
    </FormControl>
  </div>;
};

export default List;

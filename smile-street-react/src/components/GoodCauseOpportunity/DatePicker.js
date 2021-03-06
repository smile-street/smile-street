import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function DatePicker(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(
    new Date(Date.now())
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.setDate(selectedDate);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id={props.id}
          label={props.id}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          style={{ width: "60%" }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

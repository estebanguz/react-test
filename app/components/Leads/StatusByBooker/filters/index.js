import React from "react";
import { Grid, Card, CardContent, Button, makeStyles } from "@material-ui/core";
import { AutocompleteUser } from "../autocomplete";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const useStyles = makeStyles((theme) => ({
  widthCien: {
    width: "100%",
  },
}));

export const Filters = ({ getPropsAutoComplete, getPropsLeads }) => {
  const classes = useStyles();
  const props = getPropsLeads();
  return (
    <Card>
      <CardContent>
        <Grid container alignItems="center" spacing={3}>
          <Grid item lg={3} md={3} sm={3} xs={12}>
            <AutocompleteUser {...getPropsAutoComplete()} />
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={12}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                className={classes.widthCien}
                label="Fecha Inicial"
                value={props.initialDate}
                onChange={(d) => {
                  props.setInitalDate(d);
                }}
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={12}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                className={classes.widthCien}
                label="Fecha Final"
                value={props.finalDate}
                onChange={(d) => {
                  props.setFinalDate(d);
                }}
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={12}>
            <Button
              className={classes.widthCien}
              onClick={() => props.setSearch(true)}
              variant="contained"
              color="primary"
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

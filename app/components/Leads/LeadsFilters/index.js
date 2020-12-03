import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { styles } from "./styles.js";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => styles(theme));

export const FiltersLeads = ({
  size,
  setSize,
  initialDate,
  finalDate,
  setInitialDate,
  setFinalDate,
  setSearch,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper} elevation={4}>
        <Typography variant="h5" component="h3">
          Filtros
        </Typography>
        <Grid container justify="flex-start" spacing={2}>
          <Grid item md={3} xs={6}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                className={classes.filterInput}
                value={initialDate}
                label="Fecha de Inicio"
                onChange={(d) => {
                  setInitialDate(d.toISOString().slice(0, 10));
                }}
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item md={3} xs={6}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                className={classes.filterInput}
                value={finalDate}
                label="Fecha de Final"
                onChange={(d) => {
                  setFinalDate(d.toISOString().slice(0, 10));
                }}
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item md={3} xs={12}>
            <FormControl
              className={`${classes.formControl} ${classes.filterInput}`}
            >
              <InputLabel htmlFor="age-helper">Resultados</InputLabel>
              <Select
                className={classes.filterInput}
                value={size}
                onChange={(v) => {
                  setSize(v.target.value);
                }}
                input={
                  <Input
                    className={classes.filterInput}
                    name="age"
                    id="age-helper"
                  />
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
              <FormHelperText>Ajuste la cantidad de resultados</FormHelperText>
            </FormControl>
          </Grid>
          <Grid className={classes.gridItem} item md={3} xs={12}>
            <FormControl
              className={`${classes.formControl} ${classes.filterInput}`}
            >
              <Button
                onClick={() => setSearch(true)}
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Buscar
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      <br />
    </div>
  );
};

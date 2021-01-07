import React from 'react';
import {
  Grid,
  Button,
  Card,
  CardContent,
  FormControl,
  makeStyles,
  Typography
} from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { styles } from './style';

const useStyles = makeStyles((theme) => styles(theme));

export const Filter = (props) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography>Estadísticas Generales</Typography>
          </Grid>
          <Grid item md={4}>
            <FormControl className={classes.fullWidth}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                  onChange={(e) => props.setInitialDate(moment(e).format('YYYY-MM-DD'))
                  }
                  label="Fecha de Inicio"
                  value={props.initialDate}
                  animateYearScrolling={false}
                />
              </MuiPickersUtilsProvider>
            </FormControl>
          </Grid>
          <Grid item md={4}>
            <FormControl className={classes.fullWidth}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                  onChange={(e) => props.setFinalDate(moment(e).format('YYYY-MM-DD'))
                  }
                  label="Fecha Final"
                  value={props.finalDate}
                  animateYearScrolling={false}
                />
              </MuiPickersUtilsProvider>
            </FormControl>
          </Grid>
          <Grid item md={4} className={classes.btn}>
            <FormControl className={`${classes.fullWidth}`}>
              <Button
                onClick={() => props.setData([])}
                variant="contained"
                color="primary"
              >
                Buscar
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

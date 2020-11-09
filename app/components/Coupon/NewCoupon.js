import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { TextField, Button } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const NewCoupon = () => {
  const useStyles = makeStyles({
    paper: {
      padding: '16px'
    },
    form: {
      width: '100%'
    }
  });

  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [currency, setCurrency] = React.useState();

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <React.Fragment>
      <Paper className={classes.paper} elevation={4}>
        <Typography variant="h5" component="h4" style={{ marginBottom: 10 }}>
                    Crear Cupon
        </Typography>
        <Grid container justify="space-between" spacing={7}>
          <Grid item xs={12} md={3}>
            <TextField
              className={classes.form}
              label="Tipo de Cupon"
              select
              value={currency}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              helperText="seleccione su tipo de cupon"
              variant="outlined"
            >
              <option value="" />
              <option>hola 1</option>
              <option>hola 2</option>
              <option>hola 3</option>
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              className={classes.form}
              label="Cantidad Descuento"
              variant="outlined"
              type="numer"
            />
          </Grid>
          <Grid item xs={12} md={3} style={{ paddingTop: 12 }}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                className={classes.form}
                value={10}
                label="Fecha de Inicio"
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button variant="contained" color="primary" className={classes.form}>
                              Generar Cupon
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <br />
    </React.Fragment>
  );
};


export default injectIntl(NewCoupon);

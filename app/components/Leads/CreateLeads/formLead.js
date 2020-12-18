import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MuiPhoneNumber from 'material-ui-phone-number';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
}));

export const InfoGeneral = ({ data, setForm, status }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="flex-start" spacing={4}>
        <Grid item xs={12} md={8}>
          <TextField
            value={data.nombre}
            className={classes.formControl}
            label="Nombre"
            onChange={(e) => {
              setForm({ ...data, nombre: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={4} md={4}>
          <TextField
            value={data.edad}
            type="number"
            className={classes.formControl}
            label="Edad"
            onChange={(e) => {
              setForm({ ...data, edad: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={8} md={4}>
          <MuiPhoneNumber
            className={classes.formControl}
            value={data.telefono}
            label="Teléfono"
            defaultCountry="mx"
            onChange={(number) => {
              setForm({ ...data, telefono: number });
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};


export const InfoLocation = ({ data, setForm }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="space-between" spacing={4}>
        <Grid item xs={12} md={12}>
          <TextField
            value={data.mensaje}
            className={classes.formControl}
            label="Mensaje"
            onChange={(e) => {
              setForm({ ...data, mensaje: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            value={data.estado}
            className={classes.formControl}
            label="Estado"
            onChange={(e) => {
              setForm({ ...data, estado: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            value={data.ciudad}
            className={classes.formControl}
            label="Ciudad"
            onChange={(e) => {
              setForm({ ...data, ciudad: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            value={data.municipio}
            className={classes.formControl}
            label="Municipio"
            onChange={(e) => {
              setForm({ ...data, municipio: e.target.value });
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

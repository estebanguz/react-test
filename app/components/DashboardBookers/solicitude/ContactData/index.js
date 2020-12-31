import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import MuiPhoneNumber from 'material-ui-phone-number';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  marginBottom: {
    marginBottom: "20px",
  },
}));

export const ContactData = ({
  phone1,
  phone2,
  email1,
  email2,
  setPhone1,
  setPhone2,
  setEmail1,
  setEmail2,
}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.marginBottom}>
      <Grid item xs={12} md={6}>
        <FormControl className={classes.formControl}>
          <MuiPhoneNumber
            value={phone1}
            label="Teléfono 1"
            defaultCountry="mx"
            onChange={(e) => setPhone1(e)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl className={classes.formControl}>
          <MuiPhoneNumber
            value={phone2}
            label="Teléfono 2"
            defaultCountry="mx"
            onChange={(e) => setPhone2(e)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl className={classes.formControl}>
          <TextField
            label="Correo electrónico"
            value={email1}
            onInput={(e) => setEmail1(e.target.value)}
            type="email"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl className={classes.formControl}>
          <TextField
            label="Correo electrónico 2"
            value={email2}
            onInput={(e) => setEmail2(e.target.value)}
            type="email"
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import AutoCompleteSelect from "../../../components/HotelSelect/index";
import { useBanks } from "../hooks/useBanks";

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

export const PaymentMethod = ({
  cardNumber,
  cardName,
  cardExp,
  cardCvc,
  cardType,
  cardBank,
  cardConcept,
  quantity,
  setCardNumber,
  setCardName,
  setCardExp,
  setCardCvc,
  setCardType,
  setCardBank,
  setCardConcept,
  setQuantity,
}) => {
  const classes = useStyles();
  const [focus, setFocus] = useState();
  const [banks] = useBanks();
  return (
    <Grid container spacing={2} className={classes.marginBottom}>
      <Grid item xs={12}>
        <Cards
          cvc={cardCvc}
          expiry={cardExp}
          focused={focus}
          name={cardName}
          number={cardNumber}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl className={classes.formControl}>
          <TextField
            value={cardNumber}
            onInput={(e) => {
              setCardNumber(e.target.value);
              setFocus(e.target);
            }}
            label="Número de tarjeta"
            type="number"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl className={classes.formControl}>
          <TextField
            label="Titular de la tarjeta"
            value={cardName}
            onInput={(e) => {
              setCardName(e.target.value);
              setFocus(e.target);
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6} md={4}>
        <FormControl className={classes.formControl}>
          <TextField
            label="Exp"
            value={cardExp}
            placeholder="12/22"
            onInput={(e) => {
              setCardExp(e.target.value);
              setFocus(e.target);
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6} md={4}>
        <FormControl className={classes.formControl}>
          <TextField
            label="CVC"
			value={cardCvc}			
            onInput={(e) => {
              setCardCvc(e.target.value);
              setFocus('cvc');
            }}
            type="number"
          />
        </FormControl>
      </Grid>
      <Grid item xs={6} md={4}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Tipo de Tarjeta</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Débito">Débito</MenuItem>
            <MenuItem value="Crédito">Crédito</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={4}>
        <FormControl className={classes.formControl}>
          <AutoCompleteSelect
            title="Banco"
            options={banks}
            option={cardBank}
            callBack={(e) => setCardBank(e)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Concepto</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={cardConcept}
            onChange={(e) => setCardConcept(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Liquidiación">Liquidación</MenuItem>
            <MenuItem value="Pago Total">Pago Total</MenuItem>
            <MenuItem value="Apartado">Apartado</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl className={classes.formControl}>
          <TextField
            placeholder="Monto escrito en MXN"
            value={quantity}
            onInput={(e) => setQuantity(e.target.value)}
            label="Monto a cargar en la tarjeta"
            type="number"
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

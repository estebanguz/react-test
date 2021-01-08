import React, { useState } from "react";
import { useParams } from "react-router";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
  makeStyles,
  FormControl,
  Snackbar,
} from "@material-ui/core";
import SnackBarCustom from "../../utils/tools/SnackBarCustom";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { useBanks } from "../DashboardBookers/hooks/useBanks";
import AutoCompleteSelect from "../HotelSelect/index";
import { useUpdateGuestDescription } from "./hooks/useUpdateGuestDescription";
import { styles } from "./styles";

const useStyles = makeStyles((theme) => styles(theme));

export const DescriptionGuest = () => {
  const [banks] = useBanks();
  const [snack, setSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("Información Actualizada");
  const params = useParams();
  const classes = useStyles();

  const [
    presentation,
    validity,
    idCheckIn,
    cards,
    transportation,
    bank1,
    bank2,
    setPresentation,
    setValidity,
    setIdCheckIn,
    setCards,
    setTransportation,
    setBank1,
    setBank2,
    setUpdate,
  ] = useUpdateGuestDescription({ bookingCode: params.bookingCode, setSnack });

  return (
    <Card className={classes.cardVisible}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <TextField
              className={classes.formControl}
              value={presentation}
              onChange={(e) => setPresentation(e.target.value)}
              label="Presentación de 90 min"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                className={classes.formControl}
                value={validity}
                onChange={(e) => setValidity(e)}
                label="Vigencia de la Reservación"
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item md={3} xs={12}>
            <InputLabel id="demo-simple-select-label">ID Check In</InputLabel>
            <Select
              className={classes.formControl}
              value={idCheckIn}
              onChange={(e) => setIdCheckIn(e.target.value)}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value="IFE MATCH">IFE MATCH</MenuItem>
              <MenuItem value="ACTA DE CONCUBINATO">
                ACTA DE CONCUBINATO
              </MenuItem>
              <MenuItem value="ACTA DE MATRIMONIO">ACTA DE MATRIMONIO</MenuItem>
              <MenuItem value="HIJO COMÚN">HIJO COMÚN</MenuItem>
              <MenuItem value="COMPROBANTE DE DOMICILIO">
                COMPROBANTE DE DOMICILIO
              </MenuItem>
              <MenuItem value="SOLTERA ACTA DE DEFUNCIÓN">
                SOLTERA ACTA DE DEFUNCIÓN
              </MenuItem>
            </Select>
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              className={classes.formControl}
              value={cards}
              onChange={(e) => setCards(e.target.value)}
              label="Número de tarjetas"
              type="number"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <InputLabel id="demo-simple-select-label">ID Check In</InputLabel>
            <Select
              className={classes.formControl}
              value={transportation}
              onChange={(e) => setTransportation(e.target.value)}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={1}>AEROPUERTO - HOTEL</MenuItem>
              <MenuItem value={2}>HOTEL - AEROPUERTO</MenuItem>
              <MenuItem value={3}>REDONDO</MenuItem>
              <MenuItem value={4}>NO INCLUYE</MenuItem>
            </Select>
          </Grid>
          <Grid item md={3} xs={12}>
            <AutoCompleteSelect
              title="Banco 1"
              options={banks}
              option={bank1}
              callBack={(e) => setBank1(e)}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <AutoCompleteSelect
              title="Banco 2"
              options={banks}
              option={bank2}
              callBack={(e) => setBank2(e)}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <FormControl className={classes.button}>
              <Button
                onClick={() => setUpdate(true)}
                variant="contained"
                color="primary"
              >
                Actualizar Información
              </Button>
            </FormControl>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={snack}
          autoHideDuration={6000}
          onClose={() => setSnack(false)}
        >
          <SnackBarCustom
            variant="success"
            message={snackMessage}
            onClose={() => setSnack(false)}
          />
        </Snackbar>
      </CardContent>
    </Card>
  );
};

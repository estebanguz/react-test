import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {
  DatePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import MomentUtils from "@date-io/moment";
import AutoCompleteSelect from "../../../components/HotelSelect/index";
import { useBanks } from "../hooks/useBanks";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
  },
  marginBootom: {
    marginBottom: "20px",
  },
}));

export const RoomDescription = ({
  hotel,
  hotels,
  destination,
  type,
  nights,
  room,
  openDates,
  arrivalDate,
  departureDate,
  pax,
  presentation,
  validity,
  typeId,
  cardType1,
  bank1,
  cardType2,
  bank2,
  transportation,
  internalNotes,
  externalNotes,
  quantityCards,
  total,
  setHotel,
  setDestination,
  setType,
  setNights,
  setRoom,
  setOpenDates,
  setArrivalDate,
  setDepartureDate,
  setPax,
  setPresentation,
  setValidity,
  setTypeId,
  setTypeCard1,
  setBank1,
  setTypeCard2,
  setBank2,
  setTransportation,
  setInternalNotes,
  setExternalNotes,
  setQuantityCards,
  setTotal,
}) => {
  const classes = useStyles();
  const [openDate, setOpenDate] = useState(1);
  const [banks] = useBanks();
  const hotelOptions = hotels.map((suggestion) => ({
    value: suggestion.id,
    label: suggestion.nombre,
  }));

  return (
    <Grid container spacing={2} className={classes.marginBottom}>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <AutoCompleteSelect
            title="Hotel"
            options={hotelOptions}
            option={hotel}
            callBack={(e) => setHotel(e)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            label="Destino"
            value={destination}
            onInput={(e) => setDestination(e.target.value)}
            disabled
            value="Cancun"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label1">Tipo de Plan</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label1"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="Todo Incluido">Todo Incluido</MenuItem>
            <MenuItem value="Abierto">Abierto</MenuItem>
            <MenuItem value="Solo Habitación">Solo Habitación</MenuItem>
            <MenuItem value="Desayuno Incluido">Desayuno Incluido</MenuItem>
            <MenuItem value="Desayun Buffete Incluido">
              Desayun Buffete Incluido
            </MenuItem>
            <MenuItem value="Desayuno Americano Incluido">
              Desayuno Americano Incluido
            </MenuItem>
            <MenuItem value="Semi Todo Incluido">Semi Todo Incluido</MenuItem>
            <MenuItem value="Desayuno, Comida y Cena Incluida">
              Desayuno, Comida y Cena Incluida
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            value={nights}
            onInput={(e) => setNights(e.target.value)}
            label="Número de Noches"
            placeholder="Ejem: 5/4"
          />
        </FormControl>
      </Grid>
      <Grid item xs={openDate == 1 ? 6 : 3}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label2">Habitación</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label2"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          >
            <MenuItem value="Invitación al Club" selected="">
              Invitación al Club
            </MenuItem>
            <MenuItem value="Habitación Estándar">Habitación Estándar</MenuItem>
            <MenuItem value="Habitación Doble">Habitación Doble</MenuItem>
            <MenuItem value="Habitación Estudio">Habitación Estudio</MenuItem>
            <MenuItem value="Habitación Embajador">
              Habitación Embajador
            </MenuItem>
            <MenuItem value="Junior Suite">Junior Suite</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={openDate == 1 ? 6 : 3}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label3">
            ¿Fechas Abiertas?
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label3"
            value={openDate}
            onChange={(e) => setOpenDate(e.target.value)}
          >
            <MenuItem value="1">Si</MenuItem>
            <MenuItem value="2">No</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {openDate == 2 ? (
        <Grid item xs={3}>
          <FormControl className={classes.formControl}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                label="Fecha de Llegada"
                value={arrivalDate}
                onChange={(d) => setArrivalDate(d.toISOString().slice(0, 10))}
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
        </Grid>
      ) : (
        ""
      )}
      {openDate == 2 ? (
        <Grid item xs={3}>
          <FormControl className={classes.formControl}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                label="Fecha de Salida"
                value={departureDate}
                onChange={(d) => setDepartureDate(d.toISOString().slice(0, 10))}
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
        </Grid>
      ) : (
        ""
      )}
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <TextField
            label="PAX"
            value={pax}
            onInput={(e) => setPax(e.target.value)}
            placeholder="Ejem: 2.2.1"
          />
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <TextField
            label="Presentación de 90 min"
            value={presentation}
            onInput={(e) => setPresentation(e.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker
              label="Vigencia de la reservación"
              value={validity}
              onChange={(d) => setValidity(d.toISOString().slice(0, 10))}
              animateYearScrolling={false}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label4">ID Check In</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label4"
            value={typeId}
            onChange={(e) => setTypeId(e.target.value)}
          >
            <MenuItem value="IFE MATCH">IFE MATCH</MenuItem>
            <MenuItem value="Acta de Matrimonio">Acta de Matrimonio</MenuItem>
            <MenuItem value="Hijo Común">Hijo Común</MenuItem>
            <MenuItem value="Comprobante de Domicilio">
              Comprobante de Domicilio
            </MenuItem>
            <MenuItem value="Soltera Acta de Defunción">
              Soltera Acta de Defunción
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label5">
            Tipo de Tarjeta 1
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label5"
            value={cardType1}
            onChange={(e) => setTypeCard1(e.target.value)}
          >
            <MenuItem value="DÉBITO">DÉBITO</MenuItem>
            <MenuItem value="CRÉDITO">CRÉDITO</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <AutoCompleteSelect
            title="Banco"
            options={banks}
            option={bank1}
            callBack={(e) => setBank1(e)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label6">
            Tipo de Tarjeta 2
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label6"
            value={cardType2}
            onChange={(e) => setTypeCard2(e.target.value)}
          >
            <MenuItem value="DÉBITO">DÉBITO</MenuItem>
            <MenuItem value="CRÉDITO">CRÉDITO</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <AutoCompleteSelect
            title="Banco"
            options={banks}
            option={bank2}
            callBack={(e) => setBank2(e)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label7">Transportación</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label7"
            value={transportation}
            onChange={(e) => setTransportation(e.target.value)}
          >
            <MenuItem value="4">NO INCLUIDA</MenuItem>
            <MenuItem value="1">AEROPUERTO - HOTEL</MenuItem>
            <MenuItem value="2">HOETL - AEROPUERTO</MenuItem>
            <MenuItem value="3">REDONDO</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <TextField
            value={internalNotes}
            onInput={(e) => setInternalNotes(e.target.value)}
            label="Notas Importantes (Internas)"
          />
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <TextField
            label="Notas Importantes (Externas)"
            value={externalNotes}
            onInput={(e) => setExternalNotes(e.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <TextField
            label="Número de Tarjetas"
            value={quantityCards}
            onInput={(e) => setQuantityCards(e.target.value)}
            type="number"
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl className={classes.formControl}>
          <TextField
            label="Total de Venta"
            value={total}
            onInput={(e) => setTotal(e.target.value)}
            placeholder="Cantidad en MXN"
            type="number"
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

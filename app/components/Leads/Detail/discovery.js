import React, { useState, useEffect } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import {
  Typography,
  Grid,
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
  makeStyles,
} from "@material-ui/core";
import { tabPanel } from "./styles/tabsStyles";
import { RoomComponent } from "./Discovery/roomComponent";
import { createDiscovery } from "../../../api/discovery/index";

const useStyles = makeStyles((theme) => tabPanel(theme));

export const Discovery = ({ lead, discovery }) => {
  const classes = useStyles();
  const [rooms, setRooms] = useState(1);
  const [roomArray, setRoomArray] = useState([]);
  const [pax, setPax] = useState([]);
  const [fetch, setFetch] = useState(false);
  const [price, setPrice] = useState();
  const [marital, setMarital] = useState("Casado/a");
  const [status, setStatus] = useState(0);
  const [dates, setDates] = useState(false);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [save, setSave] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (rooms === 0) {
      setRooms(1);
    }
    const _temp = [];
    for (let i = 0; i < rooms; i++) {
      _temp.push({
        id: 0,
        adultos: 0,
        childs: 0,
        ageAdult: [0],
        ageChild: [0],
      });
    }
    setRoomArray(_temp);
    setReset(false);
  }, [reset, rooms]);

  useEffect(() => {
    if (discovery.discovery !== undefined) {
      setPrice(discovery.discovery.precio);
      setRooms(discovery.discovery.cuartos);
      setMarital(discovery.discovery.estado_civil);
      setRoomArray(discovery.discoveryHabitacion);
      const _paxTemp = [];
      discovery.discoveryHabitacion.map((r, i) => {
        _paxTemp.push({
          adults: {
            age: r.ageAdult,
            quantity: r.adultos,
          },
          childs: {
            age: r.ageChild ? r.ageChild : [0],
            quantity: r.childs,
          },
        });
      });
      console.log(_paxTemp);
      setPax(_paxTemp);
    }

    if (save) {
      _createDiscovery({
        phone: lead.telefono,
        id_lead: lead.id,
        rooms,
        arrival,
        departure,
        comments: lead.observacion,
        price,
        status,
        marital,
        pax,
      });
      setSave(false);
    }
  }, [save, fetch, discovery]);

  const _createDiscovery = async (data) => {
    const resp = await createDiscovery({ data });
    console.log(resp);
  };

  const setRoom = ({ data, room, type }) => {
    console.log(room);
    const _pax = pax;
    if (pax.length <= 0) {
      _pax[room] = data;
    } else if (type == 1) {
      if (_pax[room]) {
        _pax[room].adults = data.adults;
      } else {
        _pax.push(data);
      }
    } else if (_pax[room]) {
      _pax[room].childs = data.childs;
    }

    setPax(_pax);
    setFetch(true);
    setReset(true);
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={12} xs={12}>
        <Typography variant="h6">Discovery</Typography>
      </Grid>
      <Grid item md={4} xs={6}>
        <FormControl className={classes.formControl}>
          <TextField
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            label="Precio de la habitación"
            type="number"
          />
        </FormControl>
      </Grid>
      <Grid item md={4} xs={6}>
        <FormControl className={classes.formControl}>
          <InputLabel>Estado Civil</InputLabel>
          <Select value={marital} onChange={(e) => setMarital(e.target.value)}>
            <MenuItem value="Casado/a">Casado/a</MenuItem>
            <MenuItem value="Soltero/a">Soltero/a</MenuItem>
            <MenuItem value="Unión Libre">Unión Libre</MenuItem>
            <MenuItem value="Divorciado/a">Divorciado/a</MenuItem>
            <MenuItem value="Viudo/a">Viudo/a</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={4} xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel>Estado del Lead</InputLabel>
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <MenuItem value={0}>Primera Vez</MenuItem>
            <MenuItem value={1}>Ya conocía</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={4} xs={6}>
        <FormControl className={classes.formControl}>
          <TextField
            value={rooms}
            onChange={(e) => {
              setReset(true);
              setRooms(e.target.value);
            }}
            label="Número de Habitaciones"
            type="number"
          />
        </FormControl>
      </Grid>
      <Grid item md={4} xs={6}>
        <FormControl className={classes.formControl}>
          <InputLabel>Fechas</InputLabel>
          <Select
            value={dates}
            onChange={(e) => {
              setDates(e.target.value);
            }}
          >
            <MenuItem value>Fechas Cerradas</MenuItem>
            <MenuItem value={false}>Fechas Abiertas</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {dates ? (
        <Grid item md={6} xs={6}>
          <FormControl className={classes.formControl}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                label="Fecha de Llegada"
                value={arrival}
                onChange={(d) => setArrival(d.toISOString().slice(0, 10))}
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
        </Grid>
      ) : (
        ""
      )}
      {dates ? (
        <Grid item md={6} xs={6}>
          <FormControl className={classes.formControl}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                label="Fecha de Salida"
                value={departure}
                onChange={(d) => setDeparture(d.toISOString().slice(0, 10))}
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
        </Grid>
      ) : (
        ""
      )}
      {roomArray.length > 0 ? (
        roomArray.map((value, index) => (
          <>
            <Grid item md={6} xs={12}>
              <FormControl className={classes.formControl}>
                <RoomComponent
                  room={index}
                  setPax={setRoom}
                  adultos={value.adultos}
                  childs={value.childs}
                  ageAdultos={value.ageAdult}
                  ageChilds={value.ageChild}
                />
              </FormControl>
            </Grid>
          </>
        ))
      ) : (
        <></>
      )}
      <Grid item md={12} xs={12}>
        <FormControl className={classes.formControl}>
          <Button
            onClick={() => {
              setSave(true);
              setFetch(true);
            }}
            variant="contained"
            color="primary"
          >
            Guardar
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
};

import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import { tabPanel } from "./styles/tabsStyles";
import { RoomComponent } from "./Discovery/roomComponent";

const useStyles = makeStyles((theme) => tabPanel(theme));

export const Discovery = () => {
  const classes = useStyles();

  const [rooms, setRooms] = useState(1);
  const [roomArray, setRoomArray] = useState([1]);
  const [pax, setPax] = useState([]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    if (rooms === 0) {
      setRooms(1);
    }

    const _array = [];
    const _temp = [];
    for (let i = 0; i < rooms; i++) {
      _temp.push(1);
    }
    _array.concat(_temp);

    setRoomArray(_temp);
    setFetch(false);
  }, [rooms, fetch]);

  const setRoom = ({ data, room }) => {
    let _pax = [];
    _pax = data;
    const _temp = _pax.concat()

    console.log(_pax);

  };

  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <Typography variant="h6">Discovery</Typography>
      </Grid>
      <Grid item md={4}>
        <FormControl className={classes.formControl}>
          <TextField label="Precio de la habitación" type="number" />
        </FormControl>
      </Grid>
      <Grid item md={4}>
        <FormControl className={classes.formControl}>
          <InputLabel>Estado Civil</InputLabel>
          <Select>
            <MenuItem value="Casado/a">Casado/a</MenuItem>
            <MenuItem value="Soltero/a">Soltero/a</MenuItem>
            <MenuItem value="Unión Libre">Unión Libre</MenuItem>
            <MenuItem value="Divorciado/a">Divorciado/a</MenuItem>
            <MenuItem value="Viudo/a">Viudo/a</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={4}>
        <FormControl className={classes.formControl}>
          <InputLabel>Estado del Lead</InputLabel>
          <Select>
            <MenuItem value="Primera Vez">Primera Vez</MenuItem>
            <MenuItem value="Ya conocía">Ya conocía</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={4}>
        <FormControl className={classes.formControl}>
          <TextField
            value={rooms}
            onChange={(e) => {
              setRooms(e.target.value);
              setFetch(true);
            }}
            label="Número de Habitaciones"
            type="number"
          />
        </FormControl>
      </Grid>
      <Grid item md={4}>
        <FormControl className={classes.formControl}>
          <InputLabel>Fechas</InputLabel>
          <Select>
            <MenuItem value="Fechas Cerradas">Fechas Cerradas</MenuItem>
            <MenuItem value="Fechas Abiertas">Fechas Abiertas</MenuItem>
            <MenuItem value="Fechas por mes">Fechas por mes</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {roomArray.length > 0 ? (
        roomArray.map((value, index) => {
          return (
            <>
              <Grid item md={6}>
                <FormControl className={classes.formControl}>
                  <RoomComponent room={index} setPax={setRoom} />
                </FormControl>
              </Grid>
            </>
          );
        })
      ) : (
        <></>
      )}
    </Grid>
  );
};
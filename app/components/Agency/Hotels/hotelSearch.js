import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { hotelSearchStyles } from './styles/hotelSearch';
import { AutocompleteDestination } from './autocomplete';
import { useAutocomplete } from './hooks/useAutocomplete';

const useStyles = makeStyles((theme) => hotelSearchStyles(theme));

export const HotelSearch = ({
  arrival,
  departure,
  rooms,
  setArrival,
  setDeparture,
  setRooms,
  setPax,
  setDestination,
  setZoneCode,
  setDestinationType
}) => {
  const classes = useStyles();
  const [_pax, _setPax] = useState([]);
  const [_adults, _setAdults] = useState([2]);
  const [_childs, _setChilds] = useState([]);
  const [_childsAge, _setChildsAge] = useState([[0, 0, 0], [0, 0, 0]]);
  const [_rooms, _setRooms] = useState(rooms);
  const [expandedRoom1, setExpandedRoom1] = useState(false);
  const [expandedRoom2, setExpandedRoom2] = useState(false);
  const [query, destinations, destination, setQuery, setDestinations, setDestinationInput] = useAutocomplete({ setDestination });

  useEffect(() => {
    _setRooms(rooms);
    setArrayRooms();
  }, [rooms, _rooms, _adults, _childsAge, _childs]);

  const setArrayRooms = () => {
    const _array = [];
    if (_rooms > 0) {
      if (_rooms == 2 && _adults.length < 2) {
        const _tempAdults = [_adults[0], 0];
        _setAdults(_tempAdults);
      } else if (_rooms == 1 && _adults.length > 1) {
        const _tempAdults = [_adults[0]];
        _setAdults(_tempAdults);
      }

      for (let i = 1; i <= _rooms; i++) {
        _array.push({});
      }
    }

    _setPax(_array);
  };

  const hanldeExpanded1 = () => {
    if (expandedRoom2 && !expandedRoom1) {
      setExpandedRoom2(false);
      setExpandedRoom1(true);
    } else if (!expandedRoom2) {
      setExpandedRoom1(!expandedRoom1);
    }
  };

  const hanldeExpanded2 = () => {
    if (expandedRoom1 && !expandedRoom2) {
      setExpandedRoom1(false);
      setExpandedRoom2(true);
    } else if (!expandedRoom1) {
      setExpandedRoom2(!expandedRoom2);
    }
  };

  const addAdults = (value, index) => {
    const _arrayTemp = [];

    for (let i = 0; i < _rooms; i++) {
      _arrayTemp.push(_adults[i]);
    }

    _arrayTemp[index] = value;
    _setAdults(_arrayTemp);
  };

  const addChilds = (value, index) => {
    const _arrayTemp = [];

    if (_childs > 0) {
      for (let i = 0; i < _rooms; i++) {
        console.log(_childs[i]);
        _arrayTemp.push(_childs[i]);
      }
    }

    _arrayTemp[index] = value;
    _setChilds(_arrayTemp);
  };

  const addChildAge = (room, input, age) => {
    const _array = [..._childsAge];
    switch (room) {
      case 0:
        _array[room][input - 1] = age;
        console.log(`Add menor${input} to first room`);
        break;
      case 1:
        _array[room][input - 1] = age;
        console.log(`Add menor${input} to second room`);
        break;
    }
    _setChildsAge(_array);
  };

  const search = () => {
    const _arr = [];
    for (let i = 0; i < rooms; i++) {
      _arr.push({
        adultos: _adults[i],
        menor: _childs[i],
        edad: {
          menor1: parseInt(_childsAge[i][0]),
          menor2: parseInt(_childsAge[i][1]),
          menor3: parseInt(_childsAge[i][2]),
        },
      });
    }
    console.log(_arr);
    sessionStorage.removeItem('dataSearch');
    setPax(_arr);
  };

  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="space-around"
        row="row"
        spacing={3}
      >
        <Grid item md={4} sm={12} xs={12}>
          <FormControl className={classes.selectRooms}>
            <TextField
              label="Destino"
              value={destination || query}
              onKeyDown={(e) => {
                if (destination) {
                  setDestinationInput('');
                }
              }}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              id="simple-start-adornment"
            />
            {
			        destinations.length > 0 ? <AutocompleteDestination data={destinations} setDestinationInput={setDestinationInput} setDestinations={setDestinations} setZoneCode={setZoneCode} setQuery={setQuery} setDestinationType={setDestinationType} /> : <></>
			      }
          </FormControl>
        </Grid>
        <Grid item md={4} sm={12} xs={6}>
          <FormControl className={classes.selectRooms}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                label="Llegada"
                value={arrival}
                onChange={(e) => setArrival(e.toISOString().slice(0, 10))}
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
          <FormControl className={classes.selectRooms}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                label="Salida"
                value={departure}
                onChange={(e) => setDeparture(e.toISOString().slice(0, 10))}
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
        </Grid>
        <Grid item md={4} sm={12} xs={6}>
          <FormControl className={classes.selectRooms}>
            <InputLabel htmlFor="age-helper">Habitaciones</InputLabel>
            <Select
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              input={<Input name="age" id="age-helper" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {_pax.map((value, index) => (
          <Grid key={`keyPax-${index}`} item md={12} xs={12}>
            <ExpansionPanel expanded={index == 0 ? expandedRoom1 : expandedRoom2}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} onClick={() => (index == 0 ? hanldeExpanded1() : hanldeExpanded2())}>
                <Typography className={classes.heading}>
										Habitaci??n
                  {' '}
                  {index + 1}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid
                  container
                  alignItems="center"
                  justify="space-around"
                  row="row"
                  spacing={3}
                >
                  <Grid item md={3} sm={12} xs={6}>
                    <FormControl className={classes.selectRooms}>
                      <InputLabel htmlFor="adults-helper">Adultos</InputLabel>
                      <Select
                        value={_adults[index] ? _adults[index] : 0}
                        onChange={(e) => addAdults(e.target.value, index)}
                        input={<Input name="adults" id="adults-helper" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl className={classes.selectRooms}>
                      <InputLabel htmlFor="childs-helper">Menores</InputLabel>
                      <Select
                        value={_childs[index] ? _childs[index] : 0}
                        onChange={(e) => addChilds(e.target.value, index)}
                        input={<Input name="chidls" id="childs-helper" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={3} sm={12} xs={6}>
                    {
                      _childs[index] > 0
                        ? (
                          <div>
                            {
                              _childs[index] >= 1 ? (
                                <FormControl key={`keyChilds-${index}-1`} className={classes.selectRooms}>
                                  <InputLabel htmlFor="age-helper">Edad Menor 1</InputLabel>
                                  <Input onChange={(e) => addChildAge(index, 1, e.target.value)} name={`age${index}-1`} />
                                </FormControl>
                              ) : <></>
                            }
                            {
                              _childs[index] >= 2 ? (
                                <FormControl key={`keyChilds-${index}-2`} className={classes.selectRooms}>
                                  <InputLabel htmlFor="age-helper">Edad Menor 2</InputLabel>
                                  <Input onChange={(e) => addChildAge(index, 2, e.target.value)} name={`age${index}-2`} />
                                </FormControl>
                              ) : <></>
                            }
                            {
                              _childs[index] >= 3 ? (
                                <FormControl key={`keyChilds-${index}-3`} className={classes.selectRooms}>
                                  <InputLabel htmlFor="age-helper">Edad Menor 3</InputLabel>
                                  <Input onChange={(e) => addChildAge(index, 3, e.target.value)} name={`age${index}-3`} />
                                </FormControl>
                              ) : <></>
                            }
                          </div>
                        )
                        : <></>
                    }
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        ))}
        <Grid item md={12} xs={12}>
          <Button onClick={() => search()} className={classes.search} variant="contained" color="primary">
						Buscar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

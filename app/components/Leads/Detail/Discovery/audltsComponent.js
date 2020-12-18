import React, { useEffect, useState } from "react";
import { Grid, FormControl, TextField, makeStyles } from "@material-ui/core";
import { tabPanel } from "../styles/tabsStyles";

const useStyles = makeStyles((theme) => tabPanel(theme));

export const AdultsComponent = ({ room, setPax }) => {
  const classes = useStyles();
  const [adults, setAdults] = useState(1);
  const [age, setAge] = useState([20]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    if (fetch) {
      addAge();
    }
    console.log(age);
  }, [fetch]);

  const addAge = () => {
    const _temp = [];
    const _age = [];

    for (let i = 0; i < adults; i++) {
      _temp.push(20);
    }

    _temp.concat(_age);

    setAge(_temp);
    setFetch(false);
  };

  const _addAge = ({ ageValue, index }) => {
    const _temp = age; 
    _temp[index] = ageValue;   

    setAge(_temp);

    const _room = {
      adults: {
        quantity: adults,
        age
      }      
    };

    setPax({ data: _room, room, type: 1 });
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <FormControl className={classes.formControl}>
          <TextField
            value={adults}
            label="Adultos"
            type="number"
            onChange={(e) => {
              setAdults(parseInt(e.target.value));
              setFetch(true);
            }}
          />
        </FormControl>
      </Grid>
      <Grid item md={6} spacing={2}>
        {age.map((value, index) => {
          return (
            <FormControl className={classes.formControl}>
              <TextField
                value={value}
                onChange={(e) => _addAge({ ageValue: e.target.value, index })}
                label={`Edad ${index + 1}`}
                type="number"
              />
            </FormControl>
          );
        })}
      </Grid>
    </Grid>
  );
};

import React, { useEffect, useState } from "react";
import { Grid, FormControl, TextField, makeStyles } from "@material-ui/core";
import { tabPanel } from "../styles/tabsStyles";

const useStyles = makeStyles((theme) => tabPanel(theme));

export const ChildsComponent = ({ room, setPax }) => {
  const classes = useStyles();
  const [childs, setChilds] = useState(0);
  const [age, setAge] = useState([]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    if (fetch) {
      addAge();
    }
  }, [fetch]);

  const addAge = () => {
    const _temp = [];
    const _age = [];

    for (let i = 0; i < childs; i++) {
      _temp.push(0);
    }

    _temp.concat(_age);

    setAge(_temp);
    setFetch(false);
  };

  const _addAge = ({ ageValue, index }) => {
    const _temp = [];

    for (let i = 0; i < age.length; i++) {
      if (i == index) {
        _temp[index] = parseInt(ageValue);
      } else {
        _temp[i] = age[i];
      }
    }

    setAge(_temp);

    const _room = [];
    _room[room] = {
      childs,
      age,
    };

    setPax({ data: _room });
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <FormControl className={classes.formControl}>
          <TextField
            value={childs}
            label="Menores"
            type="number"
            onChange={(e) => {
              setChilds(parseInt(e.target.value));
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

import React, { useEffect, useState } from "react";
import { Grid, FormControl, TextField, makeStyles } from "@material-ui/core";
import { tabPanel } from "../styles/tabsStyles";

const useStyles = makeStyles((theme) => tabPanel(theme));

export const ChildsComponent = ({ room, setPax, noChilds, ageChilds }) => {
  const classes = useStyles();
  const [childs, setChilds] = useState(noChilds);
  const [age, setAge] = useState([]);
  const [fetch, setFetch] = useState(true);
  const [ageDiscovery,setAgeDiscovery] = useState(ageChilds)
  useEffect(() => {    
    if (fetch) {
      addAge();
    }
  }, [fetch]);

  const addAge = () => {    
    setAge(ageDiscovery);
    setFetch(false);
  };

  const _addAge = ({ ageValue, index }) => {
    const _temp = age; 
    _temp[index] = ageValue;   

    setAge(_temp);

    const _room = {
      childs: {
        quantity: childs,
        age
      }      
    };

    setPax({ data: _room, room, type: 2 });
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

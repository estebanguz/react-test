import React, { useEffect, useState } from "react";
import { Grid, FormControl, TextField, makeStyles } from "@material-ui/core";
import { tabPanel } from "../styles/tabsStyles";

const useStyles = makeStyles((theme) => tabPanel(theme));

export const AdultsComponent = ({ room, setPax, adultos,ageAdultos}) => {
  const classes = useStyles();
  const [adults, setAdults] = useState(adultos);
  const [age, setAge] = useState([]);
  const [fetch, setFetch] = useState(true);
  const [reset,setReset] = useState(false)
  const [edadDiscovery, setAgeDiscovery] = useState(ageAdultos)

  useEffect(() => {      
    if (fetch) {
      addAge();
    }   
  }, [fetch]);
  
  useEffect(()=>{
    if(reset)
    {
      const _temp = [];
      for(let i = 0 ; i < adults ; i ++)
      { 
          _temp.push(0)
      }
      setAge(_temp)
    }
  },[adults,reset])

  const addAge = () => {   
    setAge(edadDiscovery);
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
              setReset(true);
              setAdults(parseInt(e.target.value));             
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

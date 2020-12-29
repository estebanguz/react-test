import React from "react";
import { TextField, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
  paper: {
    width: "100%",
    padding: "12px",
    borderRadius: "0",
    cursor: "pointer",
    "&:hover": {
      background: "#f9f9f9",
    },
  },
  divContainer: {
    position: "absolute",
    zIndex: 1000,
    [theme.breakpoints.up('md')]: {
      width: '22%'
    },
    [theme.breakpoints.up('xs')]: {
      width: '87%'
    },
  },
}));

export const AutocompleteUser = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.textField}>
      <TextField
        className={classes.textField}
        label="Nombre del Asesor"
        value={props.query}
        onChange={(e) => {
          props.setQuery(e.target.value);
          props.setSearch(true);
        }}
      />
      <div className={classes.divContainer}>
        {props.predictions ? (
          props.predictions.map((prediction, index) => {
            return (
              <Paper
                onClick={() => {
                  props.setSelectedItem(prediction);
                  props.setQuery(prediction.username);
                  props.setSearch(false);
                }}
                className={classes.paper}
                elevation={3}
              >
                {prediction.username}
              </Paper>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

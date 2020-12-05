import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { autocompleteStyles } from "./styles";

const useStyles = makeStyles((theme) => autocompleteStyles(theme));

export const AutocompleteItems = ({ items, setSelectedItem, setQuery }) => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {items.map((value, index) => {
        return (
          <Paper
            onClick={() => {
                setSelectedItem(value);
                setQuery('');
            }}
            className={classes.item}
            elevation={4}
          >
            {value.username}
          </Paper>
        );
      })}
    </div>
  );
};

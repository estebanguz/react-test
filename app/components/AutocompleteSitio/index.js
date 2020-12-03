import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { autocompleteStyles } from "./styles";
import { AutocompleteItems } from "./items";

const useStyles = makeStyles((theme) => autocompleteStyles(theme));

export const AutoCompleteSitio = ({ label, query, data, setQuery }) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        value={query}
        className={classes.input}
        label={label}
        margin="normal"
        variant="outlined"
        onInput={(e) => setQuery(e.target.value)}
      />
      {data.length > 0 ? <AutocompleteItems items={data} /> : <></>}
    </>
  );
};

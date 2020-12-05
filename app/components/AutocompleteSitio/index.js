import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { autocompleteStyles } from "./styles";
import { AutocompleteItems } from "./items";

const useStyles = makeStyles((theme) => autocompleteStyles(theme));

export const AutoCompleteSitio = ({
  label,
  query,
  data,
  setQuery,
  selectedItem,
  setSelectedItem,
}) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        value={query ? query : selectedItem.username}
        className={classes.input}
        label={label}
        margin="normal"
        variant="outlined"
        onInput={(e) => {
          setQuery(e.target.value);
          setSelectedItem([]);
        }}
      />
      {data.length > 0 ? (
        <AutocompleteItems
          items={data}
          setSelectedItem={setSelectedItem}
          setQuery={setQuery}
        />
      ) : (
        <></>
      )}
    </>
  );
};

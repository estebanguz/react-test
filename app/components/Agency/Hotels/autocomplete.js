import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { autocomplete } from './styles/autocomplete';

const useStyles = makeStyles((theme) => autocomplete(theme));

export const AutocompleteDestination = ({
  data, setDestinations, setZoneCode, setQuery
}) => {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      {
        data || data.lenght > 0 ? data.map((value, index) => (
          <div
            onClick={() => {
              setQuery(value.nombre);
              setZoneCode(value.zone_code);
              setDestinations([]);
            }}
            className={classes.item}
            dangerouslySetInnerHTML={{ __html: value.nombre }}
          />
        )) : <></>
      }
    </div>
  );
};

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { autocomplete } from './styles/autocomplete';

const useStyles = makeStyles((theme) => autocomplete(theme));

export const AutocompleteDestination = ({
  data, setDestinations, setZoneCode, setQuery, setDestinationType
}) => {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      {
        data || data.lenght > 0 ? data.map((value, index) => (
          <>
            <Paper
              onClick={() => {
                setQuery(value.nombre);
                setZoneCode(value.zone_code);
                setDestinationType(value.destination_type);
                setDestinations([]);
              }}
              className={classes.item}
              elevation={4}
            >
              <div dangerouslySetInnerHTML={{ __html: value.nombre }} />
            </Paper>
          </>
        )) : <></>
      }
    </div>
  );
};

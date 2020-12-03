import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { HotelSearch } from './hotelSearch';
import { useHotelList } from './hooks/useHotelList';
import { HotelList } from './hotelList';
import { NotFoundComponent } from '../../helpers/NotFoundComponent';

const styles = makeStyles((theme) => ({
  progress: {
    margin: '15px',
  },
  progressDiv: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

export const HotelsView = () => {
  const classes = styles();

  const [
    arrival,
    departure,
    rooms,
    pax,
    hotelList,
    setArrival,
    setDeparture,
    setRooms,
    setPax,
    setDestination,
    setZoneCode,
    setDestinationType,
  ] = useHotelList();

  return (
    <div>
      <HotelSearch
        arrival={arrival}
        departure={departure}
        rooms={rooms}
        setArrival={setArrival}
        setDeparture={setDeparture}
        setRooms={setRooms}
        setPax={setPax}
        setDestination={setDestination}
        setZoneCode={setZoneCode}
        setDestinationType={setDestinationType}
      />
      <br />
      {hotelList == null ? (
        <NotFoundComponent />
      ) : hotelList.length > 0 ? (
        <HotelList hotels={hotelList} />
      ) : (
        <div className={classes.progressDiv}>
          <CircularProgress className={classes.progress} />
        </div>
      )}
    </div>
  );
};

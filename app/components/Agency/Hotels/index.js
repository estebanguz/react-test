import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { HotelSearch } from './hotelSearch';
import { useHotelList } from './hooks/useHotelList';
import { getAgencyHotels } from '../../../api/agency/hotels';
import { HotelList } from './hotelList';

const styles = makeStyles((theme) => ({
  progress: {
    margin: '15px',
  },
  progressDiv: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  }
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
    setZoneCode
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
      />
      <br />
      {hotelList.length > 0 ? <HotelList hotels={hotelList} /> : <div className={classes.progressDiv}><CircularProgress className={classes.progress} /></div>}
    </div>
  );
};

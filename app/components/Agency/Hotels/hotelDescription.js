import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { columnsHab } from './utils/index';
import { useCheckOut } from './hooks/useCheckout';
import { ClientModal } from './clientModal';
import { BookingModal } from './bookingModal';
import { hotelDescriptionStyles } from './styles/hotelDescription';

const useStyles = makeStyles((theme) => hotelDescriptionStyles(theme));

export const HotelDescription = ({ hotelDetails }) => {
  const classes = useStyles();
  const [openClientModal, setOpenClientModal] = useState(false);
  const [openBookingModal, setOpenBookingModal] = useState(false);
  const [name, lastName, mail, phone, cupon, precio_hab, booking, setName, setlastName, setMail, setPhone, setCupon, setPrecioHab, setRk, checkOut] = useCheckOut({ setOpenBookingModal, setOpenClientModal });

  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    print: false,
    rowsPerPage: 10,
    page: 0,
    download: false,
    selectableRows: false

  };  

  const _data = [];
  hotelDetails[0].habitacion.rooms.map((hotel, index) => {
    _data.push([hotel.name, hotel.rates.boardName, hotel.rates.net.toFixed(2), () => {
      setOpenClientModal(true);
      setPrecioHab(hotel.rates.net.toFixed(2));
      setRk(hotel.rates.rateKey);
    }]);
  });

  return (
    <div>
      <br />
      <Typography variant="h5">
        {hotelDetails[0].habitacion.name}
      </Typography>
      <br />
      <Typography>
        {hotelDetails[0].hotel.description}
      </Typography>
      <br />
      <MUIDataTable
        className={classes.table}
        title="Habitaciones Disponibles"
        data={_data}
        columns={columnsHab}
        options={options}
      />
      <ClientModal 
        classes={classes}
        name={name}
        lastName={lastName}
        mail={mail}
        phone={phone}
        cupon={cupon}
        hotelDetails={hotelDetails}
        open={openClientModal}
        setOpen={setOpenClientModal}        
        setName={setName}
        setlastName={setlastName}
        setMail={setMail}
        setPhone={setPhone}
        setCupon={setCupon}
        checkOut={checkOut}
      />
      <BookingModal 
        classes={classes}
        open={openBookingModal}
        booking={booking}
        setOpen={setOpenBookingModal}
      />
    </div>
  );
};

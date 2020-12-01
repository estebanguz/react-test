import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { columnsHab } from './utils/index';
import { useCheckOut } from './hooks/useCheckout';
import { ClientModal } from './clientModal';
import { BookingModal } from './bookingModal';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { hotelDescriptionStyles } from './styles/hotelDescription';

const useStyles = makeStyles((theme) => hotelDescriptionStyles(theme));

export const HotelDescription = ({ hotelDetails }) => {
  const classes = useStyles();
  const [openClientModal, setOpenClientModal] = useState(false);
  const [openBookingModal, setOpenBookingModal] = useState(false);
  const [loader, setloader] = useState(false);
  const [descOpen, setDescOpen] = useState(true);
  const [roomSelection, setRoomSelection] = useState('');
  const [name, lastName, mail, phone, cupon, precio_hab, booking, setName, setlastName, setMail, setPhone, setCupon, setPrecioHab, setRk, checkOut] = useCheckOut({ setOpenBookingModal, setOpenClientModal, setloader });

  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    print: false,
    rowsPerPage: 10,
    page: 0,
    download: false,
    selectableRows: 'none'

  };

  const _data = [];
  hotelDetails[0].habitacion.rooms.map((hotel, index) => {
    _data.push([hotel.name, hotel.rates.boardName, hotel.rates.net.toFixed(2), () => {
      setOpenClientModal(true);
      setPrecioHab(hotel.rates.net.toFixed(2));
      setRk(hotel.rates.rateKey); 
      setRoomSelection(hotel.name);
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
        <ExpansionPanel expanded={descOpen} onClick={() => setDescOpen(!descOpen)}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Información del Hotel</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {hotelDetails[0].hotel.description}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
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
        precio_hab={precio_hab}
        hotel={hotelDetails[0].habitacion.name}
        room={roomSelection}
        loader={loader}
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
        phone={phone}
        setOpen={setOpenBookingModal}
      />
    </div>
  );
};

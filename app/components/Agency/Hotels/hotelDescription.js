import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { columnsHab } from './utils/index';
import { useCheckOut } from './hooks/useCheckout';

const useStyles = makeStyles((theme) => ({
  table: {
    '& > div': {
      overflow: 'auto',
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all',
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          height: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    },
  },
  paper: {
    position: 'absolute',
    width: theme.spacing(50),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
  },
  modalTitle: {
    color: 'white'
  },
  modalInput: {
    width: '100%'
  },
  inputCLass: {
    width: '100%'
  },
  modalIndex: {
    zIndex: '1000 !important'
  }
}));

export const HotelDescription = ({ hotelDetails }) => {
  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    print: false,
    rowsPerPage: 10,
    page: 0,
    download: false,
    selectableRows: false

  };

  const classes = useStyles();
  const [open, setOpen] = useState();
  const [name, lastName, mail, phone, cupon, precio_hab, setName, setlastName, setMail, setPhone, setCupon, setPrecioHab, setRk, checkOut] = useCheckOut();

  const _data = [];
  hotelDetails[0].habitacion.rooms.map((hotel, index) => {
    _data.push([hotel.name, hotel.rates.boardName, hotel.rates.net.toFixed(2), () => {
      setOpen(true);
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
      <Dialog
        className={classes.modalIndex}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Datos del Cliente'}
        </DialogTitle>
        <DialogContent className={classes.modalIndex}>
          <DialogContentText id="alert-dialog-description">
            <Grid
              container
              alignItems="center"
              justify="space-around"
              row="row"
              spacing={3}
            >
              <Grid item md={6} sm={12} xs={12}>
                <FormControl className={classes.inputCLass}>
                  <TextField
                    value={name}
                    label="Nombre"
                    onChange={(e) => setName(e.target.value)}
                    id="simple-start-adornment"
                  />
                </FormControl>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <FormControl className={classes.inputCLass}>
                  <TextField
                    value={lastName}
                    label="Apellidos"
                    onChange={(e) => setlastName(e.target.value)}
                    id="simple-start-adornment"
                  />
                </FormControl>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <FormControl className={classes.inputCLass} classname={classes.modalInput}>
                  <TextField
                    value={mail}
                    label="Email"
                    onChange={(e) => setMail(e.target.value)}
                    id="simple-start-adornment"
                  />
                </FormControl>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <FormControl className={classes.inputCLass}>
                  <TextField
                    value={phone}
                    label="Teléfono"
                    onChange={(e) => setPhone(e.target.value)}
                    id="simple-start-adornment"
                  />
                </FormControl>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <FormControl className={classes.inputCLass}>
                  <TextField
                    value={cupon}
                    label="Cupón"
                    onChange={(e) => setCupon(e.target.value)}
                    id="simple-start-adornment"
                  />
                </FormControl>
              </Grid>
              <hr className={classes.modalTitle} />
              <Grid item md={12} sm={12} xs={12}>
                <Typography className={classes.modalTitle}>
                  <b>Llegada: </b>
                  {' '}
                  {hotelDetails[0].search.checkin}
                </Typography>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <Typography className={classes.modalTitle}>
                  <b>Salida: </b>
                  {' '}
                  {hotelDetails[0].search.checkout}
                </Typography>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography className={classes.modalTitle}>
                  <b>Adultos: </b>
                  {' '}
                  {hotelDetails[0].search.adults}
                </Typography>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography className={classes.modalTitle}>
                  <b>Menores: </b>
                  {' '}
                  {hotelDetails[0].search.children}
                </Typography>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
                        Cerrar
          </Button>
          <Button
            onClick={() => checkOut({
              nombre_hab: hotelDetails[0].habitacion.name,
            })}
            color="primary"
          >
                        Realizar Reserva
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

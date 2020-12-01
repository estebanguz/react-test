import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import CircularProgress from '@material-ui/core/CircularProgress';

export const ClientModal = ({
    classes,
    name,
    lastName,
    mail,
    phone,
    cupon,
    hotelDetails,
    precio_hab,
    loader,
    open,
    setOpen,
    setName,
    setlastName,
    setMail,
    setPhone,
    setCupon,
    checkOut,
}) => {
    return (
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
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography>
                                <b>Llegada: </b>
                                {' '}
                                {moment(hotelDetails[0].search.checkin).format('ll')}
                            </Typography>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography>
                                <b>Salida: </b>
                                {' '}
                                {moment(hotelDetails[0].search.checkout).format('ll')}
                            </Typography>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography>
                                <b>Habitaciones: </b>
                                {' '}
                                {hotelDetails[0].search.room}
                            </Typography>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <Typography>
                                <b>Adultos: </b>
                                {' '}
                                {hotelDetails[0].search.adults}
                            </Typography>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <Typography>
                                <b>Menores: </b>
                                {' '}
                                {hotelDetails[0].search.children}
                            </Typography>
                        </Grid>
                        {
                            loader ? <Grid item md={12} sm={12} xs={12} className={classes.loaderDiv}>
                                <CircularProgress className={classes.progress} />
                            </Grid> : <></>
                        }
                    </Grid>
                    <hr />
                    <Grid container
                        alignItems="right"
                        justify="space-around"
                        row="row"
                        spacing={3}>
                        <Grid md={12}>
                            <Typography className={classes.precioHabitacion}>
                                <b>Precio de Habitación: ${parseFloat(precio_hab).toFixed(2)} MXN</b>
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
                    onClick={() => {
                        checkOut({
                            nombre_hab: hotelDetails[0].habitacion.name,
                        });
                    }}
                    color="primary"
                >
                    Realizar Reserva
                </Button>
            </DialogActions>
        </Dialog>
    );
}
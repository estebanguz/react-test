import React from 'react';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export const BookingModal = ({
    classes,
    open,
    booking,
    phone,
    setOpen
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
                {`Reserva No: ${booking.num_reserva}`}
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
                        <Grid item md={12} sm={12} xs={12}>
                            <Paper className={classes.paper} elevation={4}>
                                <Typography variant="h5">
                                    Link de Pago
                                </Typography>
                                <Typography variant="b">
                                    <a href={booking.url} target="_blank">{booking.url}</a>
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Paper className={classes.paper} elevation={4}>
                                <Typography variant="b">
                                    Valor de la reserva: <b>${parseFloat(booking.amount).toFixed(2)} MXN</b>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </DialogContentText>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Cerrar
                    </Button>                    
                    <Button color="primary">
                        <a className={classes.linkModal} href={`https://wa.me/${phone}?text=Hola! has click en el siguiente enlace para realizar tu pago de forma segura. ${booking.url}`} target="_blank">Enviar por WhatsApp</a>
                    </Button>                    
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}
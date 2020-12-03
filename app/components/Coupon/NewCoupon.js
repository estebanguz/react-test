import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { TextField, Button } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import moment from "moment";
import Snackbar from '@material-ui/core/Snackbar';
import SnackBarCustom from "../../utils/tools/SnackBarCustom";
import {CreateCupon} from 'api/agency/Cupones.js';

const NewCoupon = (props) => {

  const {actualizar} = props
  const useStyles = makeStyles({
    paper: {
      padding: '16px'
    },
    form: {
      width: '100%'
    },
    root:{

    }
  });
  const classes = useStyles();  
  const [openSnack, setOpenSnack] = useState(false)
  const [openError, setOpenError] = useState(false)
  const [openWarning, setOpenWarning] = useState(false)
  const [snackMessage, setSnackMessage] = useState('')
  const TypeCupon = [
    {"cupon":["TOUR GRATIS","tour_gratis"]},   
    {"cupon":["SESION DE FOTOS","sesion_fotos"]},
    {"cupon":["DESCUENTOS TOUR","descuento_tour"]},
    {"cupon":["KIT PLAYERAS","kit_playeras"]},
    {"cupon":["DESCUENTOS","descuento"]},
  ]
  const [form , setForm ] = useState(
      { cupon:'',
        descuento:'',
        vigencia : moment().format("YYYY-MM-DD")        
      }
     )

  const handleChange = (event) => { 
    setForm({...form ,[event.target.name]: event.target.value})
  }

  const handleSubmit = async (e) => {    
    e.preventDefault()
    if(Object.keys(form.cupon).length > 0 && Object.keys(form.descuento).length > 0)
     {
        CreateCupon(form).then((resp) => {           
          if(resp.status)
          {
            actualizar()
            setForm({cupon:'',descuento:'',vigencia:moment().format("YYYY-MM-DD"),usuario:'victor'})
            setSnackMessage("Cupon creado correctamenete");
            setOpenSnack(true)           
          }
          else{
            setSnackMessage("error");
            setOpenError(true)
          }          
        })
    }
    else 
    {
      setSnackMessage("campos vacios");      
      setOpenWarning(true)
    }
  }

  const handleCloseStyle = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenSnack(false);
    setOpenError(false);
    setOpenWarning(false);
  }
  
  return (
    <React.Fragment>
      <Paper className={classes.paper} elevation={4}>
        <Typography variant="h5" component="h4" style={{ marginBottom: 10 }}>
                    Crear Cupon
        </Typography>
        <Grid container justify="space-between" spacing={7}>
          <Grid item xs={12} md={3}>
            <TextField
              className={classes.form}
              label="Tipo de Cupon"
              select
              name = "cupon"
              value={form.cupon}
              onChange={handleChange}
              SelectProps={{ native: true}}
              helperText="seleccione su tipo de cupon"
              variant="outlined"
            >
              <option value="" />
              { 
                TypeCupon.map((text ,index) =>[
                  <option key = {index} value = {text.cupon[1]} > { text.cupon[0] } </option>
                ]) 
              }
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              className={classes.form}
              label="Cantidad Descuento"
              variant="outlined"
              type="number"
              name = "descuento"
              value = {form.descuento}
              onChange = {handleChange}              
            />           
          </Grid>                           
          <Grid item xs={12} md={3} style={{ paddingTop: 12 }}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                className={classes.form}
                name = "vigencia"
                value={form.vigencia}
                label="Fecha de Inicio"               
                animateYearScrolling={false}
                onChange={(event) => {                                            
                  setForm({...form ,['vigencia']: event.toISOString().slice(0,10)})
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button variant="contained" color="primary" className={classes.form} onClick = {handleSubmit}>
              Generar Cupon
            </Button>
          </Grid>    
            <Snackbar anchorOrigin={{vertical: "bottom",horizontal: "left",}}  open={openSnack} autoHideDuration={6000} onClose={handleCloseStyle}>
                <SnackBarCustom className = {classes.root} variant="success" message={snackMessage} onClose={handleCloseStyle}/> 
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left",}} open={openError}	autoHideDuration={6000} onClose={handleCloseStyle}>
			  	      <SnackBarCustom className = {classes.root} variant="error"	message={snackMessage} onClose={handleCloseStyle}/>
			      </Snackbar> 
            <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left",}} open={openWarning}	autoHideDuration={6000} onClose={handleCloseStyle}>
			  	      <SnackBarCustom className = {classes.root} variant="warning"	message={snackMessage} onClose={handleCloseStyle}/>
			      </Snackbar> 
        </Grid>        
      </Paper>
      <br />
    </React.Fragment>
  );
};

export default injectIntl(NewCoupon);

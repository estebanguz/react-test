import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { hotelSearchStyles } from './styles/hotelSearch';

const useStyles = makeStyles((theme) => hotelSearchStyles(theme));

export const SearchComponent = () => {
    const classes = useStyles();
    const searchQuery = JSON.parse(sessionStorage.getItem('dataSearch'));    

    console.log(searchQuery);

    return (
        <>
      <Grid
        container
        alignItems="center"
        justify="space-around"
        row="row"
        spacing={3}
      >
        <Grid item md={4} sm={12} xs={12}>
          <FormControl className={classes.selectRooms}>
            <TextField
              label="Destino"
              value={searchQuery.destino}
              disabled
              id="simple-start-adornment"
            />            
          </FormControl>
        </Grid>
        <Grid item md={4} sm={12} xs={6}>
          <FormControl className={classes.selectRooms}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                label="Llegada"
                value={searchQuery.llegada}                
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
          <FormControl className={classes.selectRooms}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                label="Salida"
                value={searchQuery.salida}                
                animateYearScrolling={false}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
        </Grid>
        <Grid item md={4} sm={12} xs={6}>
          <FormControl className={classes.selectRooms}>
            <InputLabel htmlFor="age-helper">Habitaciones</InputLabel>
            <Select
              value={searchQuery.room}              
              input={<Input name="age" id="age-helper" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {searchQuery.pax ? searchQuery.pax.map((value, index) => (
          <Grid key={`keyPax-${index}`} item md={12} xs={12}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
										Habitación
                  {' '}
                  {index + 1}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid
                  container
                  alignItems="center"
                  justify="space-around"
                  row="row"
                  spacing={3}
                >
                  <Grid item md={3} sm={12} xs={6}>
                    <FormControl className={classes.selectRooms}>
                      <InputLabel htmlFor="age-helper">Adultos</InputLabel>
                      <Select
                        value={value.adultos}                        
                        input={<Input name="age" id="age-helper" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl className={classes.selectRooms}>
                      <InputLabel htmlFor="age-helper">Menores</InputLabel>
                      <Select
                        value={value.menor}                        
                        input={<Input name="age" id="age-helper" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={3} sm={12} xs={6}>
                    {
                      0 > 0
                        ? (
                          <div>
                            {
                              _childs[index] >= 1 ? (
                                <FormControl key={`keyChilds-${index}-1`} className={classes.selectRooms}>
                                  <InputLabel htmlFor="age-helper">Edad Menor 1</InputLabel>
                                  <Input name="age1" />
                                </FormControl>
                              ) : <></>
                            }
                            {
                              _childs[index] >= 2 ? (
                                <FormControl key={`keyChilds-${index}-2`} className={classes.selectRooms}>
                                  <InputLabel htmlFor="age-helper">Edad Menor 2</InputLabel>
                                  <Input name="age2" />
                                </FormControl>
                              ) : <></>
                            }
                            {
                              _childs[index] >= 3 ? (
                                <FormControl key={`keyChilds-${index}-3`} className={classes.selectRooms}>
                                  <InputLabel htmlFor="age-helper">Edad Menor 3</InputLabel>
                                  <Input name="age3" />
                                </FormControl>
                              ) : <></>
                            }
                          </div>
                        )
                        : <></>
                    }
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        )) : <></>}
        <Grid item md={12} xs={12}>
          <Button onClick={() => console.log('Busqueda')} className={classes.search} variant="contained" color="primary">
				Hacer una nueva búsqueda
          </Button>
        </Grid>
      </Grid>
    </>
    );
}
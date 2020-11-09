import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Button from "@material-ui/core/Button";
import { hotelSearchStyles } from './styles/hotelSearch';

const useStyles = makeStyles((theme) => (hotelSearchStyles(theme)));

export const HotelSearch = ({
	destination,
	arrival,
	departure,
	rooms,
	adults,
	childs,
	setDestination,
	setArrival,
	setDeparture,
	setRooms,
	setAdults,
	setChidls,
}) => {
	const classes = useStyles();
	return (
		<Grid
			container
			alignItems="center"
			justify="space-around"
			row="row"
			spacing={3}
		>
			<Grid item>
				<TextField
					label="Destino"
					value={destination}
					onChange={(e) => setDestination(e.target.value)}
					id="simple-start-adornment"
				/>
			</Grid>
			<Grid item className={classes.dates}>
				<FormControl>
					<MuiPickersUtilsProvider utils={MomentUtils}>
						<DatePicker
							label="Llegada"
							value={arrival}
							onChange={(e) => setArrival(e.toISOString().slice(0, 10))}
							animateYearScrolling={false}
						/>
					</MuiPickersUtilsProvider>
				</FormControl>
				<FormControl>
					<MuiPickersUtilsProvider utils={MomentUtils}>
						<DatePicker
							label="Salida"
							value={departure}
							onChange={(e) => setDeparture(e.toISOString().slice(0, 10))}
							animateYearScrolling={false}
						/>
					</MuiPickersUtilsProvider>
				</FormControl>
			</Grid>
			<Grid item className={classes.rooms}>
				<FormControl className={classes.selectRooms}>
					<InputLabel htmlFor="age-helper">Habitaciones</InputLabel>
					<Select
						value={rooms}
						onChange={(e) => setRooms(e.target.value)}
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
			<Grid item className={classes.paxRooms}>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="age-helper">Adultos Hab 1</InputLabel>
					<Select input={<Input name="age" id="age-helper" />}>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
					</Select>
				</FormControl>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="age-helper">Menores Hab 1</InputLabel>
					<Select input={<Input name="age" id="age-helper" />}>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid>
				<FormControl className={classes.formControl}>
					<Button variant="contained" color="primary">
						Buscar
					</Button>
				</FormControl>
			</Grid>
		</Grid>
	);
};

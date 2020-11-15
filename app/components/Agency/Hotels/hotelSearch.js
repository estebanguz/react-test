import React, { useState } from "react";
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
import { hotelSearchStyles } from "./styles/hotelSearch";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => hotelSearchStyles(theme));

export const HotelSearch = ({
	destination,
	arrival,
	departure,
	rooms,
	pax,
	setDestination,
	setArrival,
	setDeparture,
	setRooms,
	setAdults,
	setChidls,
}) => {
	const classes = useStyles();
	const [_adults, setAdultsComponent] = useState([]);
	const [_childs, setChildsComponent] = useState([]);
	const [_ages, setAgesComponent] = useState([]);

	const _addAdults = (room, adults) => {
		let _pax = [];
		if (room == 0) {
			_pax.push({});
		}
	};

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
							value={destination}
							onChange={(e) => setDestination(e.target.value)}
							id="simple-start-adornment"
						/>
					</FormControl>
				</Grid>
				<Grid item md={4} sm={12} xs={6}>
					<FormControl className={classes.selectRooms}>
						<MuiPickersUtilsProvider utils={MomentUtils}>
							<DatePicker
								label="Llegada"
								value={arrival}
								onChange={(e) => setArrival(e.toISOString().slice(0, 10))}
								animateYearScrolling={false}
							/>
						</MuiPickersUtilsProvider>
					</FormControl>
					<FormControl className={classes.selectRooms}>
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
				<Grid item md={4} sm={12} xs={6}>
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
				{pax.map((value, index) => {
					return (
						<Grid item md={12} xs={12}>
							<ExpansionPanel>
								<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
									<Typography className={classes.heading}>
										Habitación {index + 1}
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
													onChange={(e) => setAdults(e.target.value)}
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
													onChange={(e) => setChidls(e.target.value)}
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
										{value.menor > 0 ? (
											<Grid item md={3} sm={12} xs={6}>
												{value.menor >= 1 ? (
													<FormControl className={classes.selectRooms}>
														<TextField
															label="Edad Menor 1"
															value={value.edad.menor1}
															onChange={(e) => console.log(e.target.value)}
															id="simple-start-adornment"
														/>
													</FormControl>
												) : (
													<></>
												)}
												{value.menor >= 2 ? (
													<FormControl className={classes.selectRooms}>
														<TextField
															label="Edad Menor 2"
															value={value.edad.menor2}
															onChange={(e) => console.log(e.target.value)}
															id="simple-start-adornment"
														/>
													</FormControl>
												) : (
													<></>
												)}
												{value.menor >= 3 ? (
													<FormControl className={classes.selectRooms}>
														<TextField
															label="Edad Menor 3"
															value={value.edad.menor3}
															onChange={(e) => console.log(e.target.value)}
															id="simple-start-adornment"
														/>
													</FormControl>
												) : (
													<></>
												)}
											</Grid>
										) : (
											<></>
										)}
									</Grid>
								</ExpansionPanelDetails>
							</ExpansionPanel>
						</Grid>
					);
				})}
				<Grid item md={12} xs={12}>
					<Button className={classes.search} variant="contained" color="primary">
						Buscar
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

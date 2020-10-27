import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { styles } from "./styles.js";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const FiltersLeads = (props) => {
	const {
		classes,
		size,
		setSize,
		initialDate,
		finalDate,
		setInitialDate,
		setFinalDate,
		setstatus,
	} = props;

	return (
		<div>
			<Paper className={`${classes.paper}`} elevation={4}>
				<Typography variant="h5" component="h3">
					Filtros
				</Typography>				
				<Grid item xs={12}>
					<Grid container justify="flex-start" spacing={7}>
						<Grid item>
							<MuiPickersUtilsProvider utils={MomentUtils}>
								<DatePicker
									value={initialDate}
									label="Fecha de Inicio"
									onChange={(d) => {
										setInitialDate(d.toISOString().slice(0, 10));
									}}
									animateYearScrolling={false}
								/>
							</MuiPickersUtilsProvider>
						</Grid>
						<Grid item>
							<MuiPickersUtilsProvider utils={MomentUtils}>
								<DatePicker
									value={finalDate}
									label="Fecha de Final"
									onChange={(d) => {
										setFinalDate(d.toISOString().slice(0, 10));
										setstatus(true);
									}}
									animateYearScrolling={false}
								/>
							</MuiPickersUtilsProvider>
						</Grid>
						<Grid item>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor="age-helper">Resultados</InputLabel>
								<Select
									value={size}
									onChange={(v) => {
										setSize(v.target.value);
										setstatus(true);
									}}
									input={<Input name="age" id="age-helper" />}
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={20}>20</MenuItem>
									<MenuItem value={30}>30</MenuItem>
								</Select>
								<FormHelperText>
									Ajuste la cantidad de resultados
								</FormHelperText>
							</FormControl>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
			<br />
		</div>
	);
};

FiltersLeads.propTypes = {
	classes: PropTypes.object.isRequired,
	size: PropTypes.number.isRequired,
	setSize: PropTypes.function,
	initialDate: PropTypes.string,
	finalDate: PropTypes.string,
	setInitialDate: PropTypes.function,
	setFinalDate: PropTypes.function,
	setstatus: PropTypes.function,
};

export default withStyles(styles)(FiltersLeads);

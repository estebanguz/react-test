import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: "100%",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export const PooledIncome = ({ aprox, realQty, setAprox, setRealQty }) => {
	const classes = useStyles();

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Grid container justify="flex-start" spacing={4}>
					<Grid item xs={6}>
						<FormControl className={classes.formControl}>
							<InputLabel id="demo-simple-select-label">
								Ingresos aproximados
							</InputLabel>
							<Select
								labelId="demo-simple-select-helper-label"
								id="demo-simple-select-helper"
								value={aprox}
								onChange={(e) => setAprox(e.target.value)}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value="1">40,000 - 60,000</MenuItem>
								<MenuItem value="2">60,000 - 90,000</MenuItem>
								<MenuItem value="3">Mayor a 90,000</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<FormControl className={classes.formControl}>
							<TextField
								id="filled-password-input"
								label="Cantidad Real"
								value={realQty}
								onInput={(e) => setRealQty(e.target.value)}
								placeholder="Cantidad en MXN"
								type="number"
							/>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

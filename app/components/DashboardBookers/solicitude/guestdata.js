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
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export const GuestData = ({
	guestName,
	guestAge,
	guestProffession,
	guestCompany,
	guestPosition,
	guestMartialStatus,
	guestAddress,
	guestCity,
	guestState,
	guestCp,
	setGuestName,
	setGuestAge,
	setGuestProfession,
	setGuestCompany,
	setGuestPosition,
	setGuestMaritalStatus,
	setGuestAddress,
	setGuestCity,
	setGuestState,
	setGuestCp,
}) => {
	const classes = useStyles();

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Grid container justify="flex-start" spacing={4}>
					<Grid item>
						<FormControl className={classes.formControl}>
							<TextField
								value={guestName}
								label="Nombre del Huesped"
								onInput={(e) => setGuestName(e.target.value)}
							/>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl className={classes.formControl}>
							<TextField
								value={guestAge}
								label="Edad"
								onInput={(e) => setGuestAge(e.target.value)}
								type="number"
							/>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl className={classes.formControl}>
							<TextField
								label="Profesión"
								value={guestProffession}
								onInput={(e) => setGuestProfession(e.target.value)}
							/>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl className={classes.formControl}>
							<TextField
								value={guestCompany}
								onInput={(e) => setGuestCompany(e.target.value)}
								label="Empresa donde labora"
							/>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl className={classes.formControl}>
							<TextField
								value={guestPosition}
								onInput={(e) => setGuestPosition(e.target.value)}
								label="Cargo"
							/>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl className={classes.formControl}>
							<InputLabel id="demo-simple-select-label">
								Estado Civil
							</InputLabel>
							<Select
								labelId="demo-simple-select-helper-label"
								value={guestMartialStatus}
								onChange={(e) => setGuestMaritalStatus(e.target.value)}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value="Casado/a">Casado/a</MenuItem>
								<MenuItem value="Soltero/a">Soltero/a</MenuItem>
								<MenuItem value="Union Libre">Union Libre</MenuItem>
								<MenuItem value="Divorciado/a">Divorciado/a</MenuItem>
								<MenuItem value="Viudo/a">Viudo/a</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl className={classes.formControl}>
							<TextField
								value={guestAddress}
								onInput={(e) => setGuestAddress(e.target.value)}
								label="Domicilio"
							/>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl className={classes.formControl}>
							<TextField
								value={guestCity}
								onInput={(e) => setGuestCity(e.target.value)}
								label="Ciudad"
							/>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl className={classes.formControl}>
							<TextField
								value={guestState}
								onInput={(e) => setGuestState(e.target.value)}
								label="Estado"
							/>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl className={classes.formControl}>
							<TextField
								value={guestCp}
								onInput={(e) => setGuestCp(e.target.value)}
								label="Código postal"
								type="number"
							/>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

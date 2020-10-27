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

export const ContactData = ({
	phone1,
	phone2,
	email1,
	email2,
	setPhone1,
	setPhone2,
	setEmail1,
	setEmail2,
}) => {
	const classes = useStyles();

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Grid container justify="flex-start" spacing={4}>
					<Grid item>
						<FormControl className={classes.formControl}>
							<TextField
								label="Teléfono 1"
								value={phone1}
								onInput={(e) => setPhone1(e.target.value)}
								type="number"
							/>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl className={classes.formControl}>
							<TextField
								label="Teléfono 2"
								value={phone2}
								onInput={(e) => setPhone2(e.target.value)}
								type="number"
							/>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl className={classes.formControl}>
							<TextField
								label="Correo electrónico"
								value={email1}
								onInput={(e) => setEmail1(e.target.value)}
								type="email"
							/>
						</FormControl>
					</Grid>
					<Grid item>
						<FormControl className={classes.formControl}>
							<TextField
								label="Correo electrónico 2"
								value={email2}
								onInput={(e) => setEmail2(e.target.value)}
								type="email"
							/>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

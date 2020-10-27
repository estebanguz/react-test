import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: "100%",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	gridItem: {
		display: "flex",
		alignItems: "center",
	},
}));

export const Companions = ({ companions, addCompanion }) => {
	const classes = useStyles();
	const [name, setName] = useState("");
	const [age, setAge] = useState("");

	useEffect(() => {
		console.log(companions.length);
	}, [companions]);

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				{companions.length > 0
					? companions.map((companion, index) => (
							<Grid key={`${companion.age}${index}`} container justify="flex-start" spacing={4}>
								<Grid item xs={4}>
									<FormControl className={classes.formControl}>
										<TextField
											value={companion.name}
											onInput={(e) => setName(e.target.value)}
											label="Nombre completo"
										/>
									</FormControl>
								</Grid>
								<Grid item xs={4}>
									<FormControl className={classes.formControl}>
										<TextField
											label="Edad"
											value={companion.age}
											onInput={(e) => setAge(e.target.value)}
											type="number"
										/>
									</FormControl>
								</Grid>
								<Grid item className={classes.gridItem} xs={4}>
									<FormControl className={classes.formControl}>
										<Button
											onClick={() => addCompanion({ name, age })}
											variant="contained"
											color="primary"
										>
											Editar
										</Button>
										<Button
											onClick={() => addCompanion({ name, age })}
											variant="contained"
											color="danger"
										>
											Eliminar
										</Button>
									</FormControl>
								</Grid>
							</Grid>
					  ))
					: "Nothing"}
				<Grid container justify="flex-start" spacing={4}>
					<Grid item xs={4}>
						<FormControl className={classes.formControl}>
							<TextField
								value={name}
								onInput={(e) => setName(e.target.value)}
								label="Nombre completo"
							/>
						</FormControl>
					</Grid>
					<Grid item xs={4}>
						<FormControl className={classes.formControl}>
							<TextField
								label="Edad"
								value={age}
								onInput={(e) => setAge(e.target.value)}
								type="number"
							/>
						</FormControl>
					</Grid>
					<Grid item className={classes.gridItem} xs={4}>
						<FormControl className={classes.formControl}>
							<Button
								onClick={() => addCompanion({ name, age })}
								variant="contained"
								color="primary"
							>
								Agregar Acompañante
							</Button>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

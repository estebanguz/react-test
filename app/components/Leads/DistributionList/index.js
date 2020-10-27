import React, { useState, useEffect, setState } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import classNames from "classnames";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styles from "enl-components/Tables/tableStyle-jss";
import Button from "@material-ui/core/Button";
import { getLeads } from "../../../api/leads";
import { setLeadsByQuantity, setLeadsByArray } from "../../../api/distribution";
import FiltersLeads from "../LeadsFilters";
import SelectSuggestions from "./autocomplete";
import moment from "moment";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import SnackBarCustom from "../../../utils/tools/SnackBarCustom";

function DistributionList(props) {
	const { classes } = props;
	const [leads, setLeads] = useState();
	const [page, setPage] = useState(1);
	const [size, setSize] = useState(10);
	const [initialDate, setInitialDate] = useState(
		moment()
			.startOf("month")
			.format("YYYY-MM-DD hh:mm")
	);
	const [finalDate, setFinalDate] = useState(
		moment()
			.endOf("month")
			.format("YYYY-MM-DD hh:mm")
	);
	const [totalPages, setTotalPages] = useState([]);
	const [changeStatus, setstatus] = useState(true);
	const [checkStatus, setCheckStatus] = useState(false);
	const [selectedLeads, setSelectedLeads] = useState([]);
	const [colaborador, setColaborador] = React.useState(null);
	const [colabs, setColabs] = React.useState([]);
	const [cantidad, setCantidad] = React.useState();
	const [leadsColab, setLeadsColab] = React.useState([]);
	const [selectAll, setSelectAll] = React.useState();
	const [openSnack, setOpenSnack] = React.useState(false);
	const [snackMessage, setSnackMessage] = React.useState();
	const [openError, setOpenError] = React.useState(false);
	const prev = () => {
		if (page !== 1) setPage(page - 1);
	};

	const next = () => {
		if (page < totalPages) setPage(page + 1);
	};

	const last = () => {
		setPage(totalPages);
	};

	const first = () => {
		setPage(1);
	};

	const useStyles = makeStyles((theme) => ({
		container: {
			padding: "16px",
		},
	}));

	const handleCloseStyle = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenSnack(false);
		setOpenError(false);
	};

	const handleDistribution = () => {
		if (colaborador) {
			if (cantidad > 0) {
				const data = {
					broker: colaborador,
					quantity: cantidad,
				};
				setLeadsByQuantity({ data }).then(() => {
					setSnackMessage("Leads asignados");
					setOpenSnack(true);
				});
			} else if (selectedLeads.length > 0) {
				const data = {
					broker: colaborador.value,
					leads: selectedLeads,
				};
				setLeadsByArray({ data }).then(() => {
					setSnackMessage("Leads asignados");
					setOpenSnack(true);
				});
			} else {
				setSnackMessage("Selecciona algunos leads");
				setOpenError(true);
			}
		} else {
			setSnackMessage("Selecciona Colaborador");
			setOpenError(true);
		}
	};

	const handleCheckAll = () => {
		if (selectAll) {
			setSelectedLeads([]);
			setSelectAll(false);
		} else {
			let _selectedLeads = [];
			leads.data.map((lead) => {
				_selectedLeads.push(lead.id);
			});

			setSelectedLeads(_selectedLeads);
			setSelectAll(true);
		}
	};

	useEffect(() => {
		console.log(selectedLeads);
		if (changeStatus && !checkStatus) {
			getLeads({ page, size, initialDate, finalDate }).then((resp) => {
				if (resp.data.message) {
					console.log(resp.data);
					setLeads(resp.data.message);
					setTotalPages(resp.data.message.total_pages);
				} else {
					console.log(resp);
				}

				setstatus(false);
			});
		} else if (checkStatus) {
			setCheckStatus(false);
		}
	}, [checkStatus, page, size, changeStatus]);

	return (
		<div className={classes.rootTable}>
			<FiltersLeads
				size={size}
				setSize={setSize}
				initialDate={initialDate}
				finalDate={finalDate}
				setInitialDate={setInitialDate}
				setFinalDate={setFinalDate}
				setstatus={setstatus}
			/>
			<Paper className={`${useStyles().container}`} elevation={4}>
				<SelectSuggestions
					setColaborador={setColaborador}
					colaborador={colaborador}
					setColabs={setColabs}
					colabs={colabs}
				/>
				<Grid
					container
					alignItems="flex-start"
					justify="space-around"
					row="row"
					spacing={3}
				>
					<Grid item md={6}>
						<TextField
							id="outlined-password-input"
							label="Cantidad de Leads a Distribuir"
							className={classes.textField}
							type="number"
							margin="normal"
							variant="outlined"
							value={cantidad}
							onInput={(res) => {
								setCantidad(res.target.value);
							}}
						/>
					</Grid>
					<Grid item md={6}>
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							onClick={handleDistribution}
						>
							Distribuir
						</Button>
					</Grid>
				</Grid>
			</Paper>
			<Toolbar className={classes.toolbar}>
				<div className={classes.title}>
					<Typography variant="h6">
						Mostrando
						{` ${size} `}
						resultados. Página
						{` ${page} `}
					</Typography>
				</div>
			</Toolbar>
			<Table className={classNames(classes.table, classes.hover)}>
				<TableHead>
					<TableRow>
						<TableCell align="left">
							<Checkbox
								value={selectAll}
								onChange={() => handleCheckAll()}
								name="checkedB"
								color="primary"
							/>
						</TableCell>
						<TableCell align="left">Nombre</TableCell>
						<TableCell align="left">Email</TableCell>
						<TableCell align="left">Teléfono</TableCell>
						<TableCell align="left">Ciudad</TableCell>
						<TableCell align="left">Estatus</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{leads
						? leads.data.map((n, index) => [
								<TableRow key={n.id}>
									<TableCell>
										<Checkbox
											checked={selectedLeads.includes(n.id)}
											onChange={() => {
												const _leads = selectedLeads;

												if (!selectedLeads.includes(n.id)) {
													_leads.push(n.id);
													setSelectedLeads(_leads);
													setCheckStatus(true);
													setstatus(true);
												} else {
													const _index = _leads.indexOf(n.id);
													_leads.splice(_index, 1);
													setSelectedLeads(_leads);
													setCheckStatus(true);
													setstatus(true);
												}
											}}
											name="checkedB"
											color="primary"
										/>
									</TableCell>
									<TableCell>{n.nombre}</TableCell>
									<TableCell>{n.email}</TableCell>
									<TableCell>{n.telefono}</TableCell>
									<TableCell>{n.ciudad}</TableCell>
									<TableCell>{n.status}</TableCell>
								</TableRow>,
						  ])
						: ""}
				</TableBody>
			</Table>
			<div className={classes.pagination}>
				<Button onClick={first} variant="outlined" className={classes.button}>
					{"<<"}
				</Button>
				<Button onClick={prev} variant="outlined" className={classes.button}>
					{"<"}
				</Button>
				<Button variant="outlined" className={classes.button}>
					{page}
				</Button>
				<span> de </span>
				<Button variant="outlined" className={classes.button}>
					{totalPages}
				</Button>
				<Button onClick={next} variant="outlined" className={classes.button}>
					{">"}
				</Button>
				<Button onClick={last} variant="outlined" className={classes.button}>
					{">>"}
				</Button>
			</div>
			<Snackbar
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				open={openSnack}
				autoHideDuration={6000}
				onClose={handleCloseStyle}
			>
				<SnackBarCustom
					variant="success"
					message={snackMessage}
					onClose={handleCloseStyle}
				/>
			</Snackbar>
			<Snackbar
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				open={openError}
				autoHideDuration={6000}
				onClose={handleCloseStyle}
			>
				<SnackBarCustom
					variant="error"
					className={classes.margin}
					message={snackMessage}
					onClose={handleCloseStyle}
				/>
			</Snackbar>
		</div>
	);
}

DistributionList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DistributionList);

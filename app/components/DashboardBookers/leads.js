import React, { useState, useEffect, setState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styles from "enl-components/Tables/tableStyle-jss";
import { LeadsFilterBooker } from "enl-components";
import IconButton from "@material-ui/core/IconButton";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Alarm from "@material-ui/icons/Alarm";
import Eye from "@material-ui/icons/RemoveRedEye";
import Button from "@material-ui/core/Button";
import { getLeads } from "../../api/leads";
import { customStyles } from "./styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import MomentUtils from "@date-io/moment";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import GroupIcon from '@material-ui/icons/Group';
import io from 'socket.io-client';

//Custom hooks
import { useReminder } from "./hooks/useReminder";

import {
	DateTimePicker,
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import { useLeadStatus } from "./hooks/useLeadStatus";
//const socket = io('http://io.apicrmcancun.gq/');
const socket = io('http://localhost:1234');

function LeadsBooker(props) {
	const { classes } = props;
	const [leads, setLeads] = useState([]);
	const [page, setPage] = useState(1);
	const [size, setSize] = useState(10);
	const [totalPages, setTotalPages] = useState([]);
	const [changeStatus, setstatus] = useState(true);
	const [openLead, setOpenLead] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [date, setDate, message, setMessage, lead, setLead] = useReminder();
	const [setLeadId, setStatusLead, setFetch, resp] = useLeadStatus();	
	const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
	const [socketConnect, setSocketConnect] = useState(false);

	const clearString = (str) => {
		const up = str.charAt(0).toUpperCase() + str.slice(1);
		return up.replace(/[^a-zA-Z ]/g, " ");
	}

	const prev = () => {
		if (page !== 1) setPage(page - 1);
	};

	const next = () => {
		if (page < totalPages) setPage(page + 1);
	};

	const sendNumber = (lead) => {
		console.log(lead);
		socket.emit('sendnumber', {
			id: user.id,
			lead: lead
		});
	}

	const last = () => {
		setPage(totalPages);
	};

	const first = () => {
		setPage(1);
	};

	useEffect(() => {
		if(!socketConnect){
			socket.on('connect',() => {				
				console.log('Socket on');
				setSocketConnect(true);
				socket.emit('userjoin', user.id);		
				console.log(`Room: ${user.id}`);
				socket.on('phone', (data) => {
					console.log(data);
				});
			});
		}	
		getLeads({ page, size }).then((response) => {			
			if (response.data.message) {
				setLeads(response.data.message);
				setstatus(false);
				setTotalPages(response.data.message.total_pages);
			}
		});
	}, [page, size, changeStatus, resp]);

	return (
		<div className={classes.rootTable}>
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
						<TableCell align="left">#</TableCell>
						<TableCell align="left">Nombre</TableCell>
						<TableCell align="left">Email</TableCell>
 						<TableCell align="left">Teléfono</TableCell>
						<TableCell align="left">Acciones</TableCell>
						<TableCell align="left">Estatus</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{!changeStatus
						? leads.data.map((n, index) => [
								<TableRow key={n.id}>
									<TableCell>{index + 1}</TableCell>
									<TableCell>{n.nombre}</TableCell>
									<TableCell>{n.email}</TableCell>
									<TableCell>
										<Button
											className={customStyles.button}
											variant="contained"
											color="primary"
											onClick={(e) => sendNumber(n)}
										>
											Llamar
										</Button>
									</TableCell>
									<TableCell>
										<IconButton
											className={customStyles.button}
											aria-label="WhatsApp"
											color="success"
											onClick={(e) => {
												window.open(
													`https://api.whatsapp.com/send?phone=${n.telefono}`
												);
											}}
										>
											<WhatsApp />
										</IconButton>
										<IconButton
											className={customStyles.button}
											aria-label="Notificacion"
											color="success"
											onClick={() => {
												setOpenModal(true);
												setLead(n.id);
											}}
										>
											<Alarm />
										</IconButton>
										<IconButton
											className={customStyles.button}
											aria-label="View"
											color="success"
											onClick={() => {
												setOpenLead(true);												
											}}
										>
											<Eye />
										</IconButton>
									</TableCell>
									<TableCell>
										<InputLabel htmlFor="age-simple">Status</InputLabel>
										<Select
											value={n.status}
											onChange={(e) => {
												setLeadId(n.id);
												setStatusLead(e.target.value);
												setFetch(true);											
											}}
											className={customStyles.formControl}
										>
		 									<MenuItem value="">
												<em>None</em>
											</MenuItem>
											<MenuItem value={1}>Ventas</MenuItem>
											<MenuItem value={2}>Reservas sin pago</MenuItem>
											<MenuItem value={5}>Control de Calidad</MenuItem>
											<MenuItem value={6}>Fuera de servicio</MenuItem>
											<MenuItem value={7}>Número invalido</MenuItem>
											<MenuItem value={3}>Pendiente</MenuItem>
											<MenuItem value={40}>No contesta</MenuItem>
											<MenuItem value={50}>No interesa</MenuItem>
											<MenuItem value={100}>Atendido</MenuItem>
											<MenuItem value={101}>WhatsApp</MenuItem>
											<MenuItem value={102}>SMS</MenuItem>
											<MenuItem value={103}>Cambio de voz</MenuItem>
											<MenuItem value={203}>Tarjeta</MenuItem>
											<MenuItem value={303}>NIP</MenuItem>
											<MenuItem value={403}>Autorización</MenuItem>
											<MenuItem value={503}>Motivos</MenuItem>
										</Select>
									</TableCell>
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
			<Typography size={20}>Filtros</Typography>
			<Grid container spacing={1}>
				{!changeStatus ? leads.stats.map((stat) => (
					<Grid key={stat.key} item xs={3}>
						<LeadsFilterBooker unitAfter={stat.count}>							
							<GroupIcon />
							<Typography>{clearString(stat.desc)}</Typography>
						</LeadsFilterBooker>
					</Grid>
				)) : ''}
			</Grid>
			<br/>

			<Dialog
				open={openModal}
				onClose={() => setOpenModal(false)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Crear un recordatorio para este Lead"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						<Grid
							container
							alignItems="center"
							justify="space-aroud"
							direction="row"
						>
							<Grid item md={6}>
								<MuiPickersUtilsProvider utils={MomentUtils}>
									<DateTimePicker
										disablePast
										value={date}
										onChange={(e) => setDate(e.toString())}
										label="Programar recordatorio"
									/>
								</MuiPickersUtilsProvider>
							</Grid>
							<Grid item md={6}>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="name-simple">Descripción</InputLabel>
									<Input
										id="name-simple"
										value={message}
										onChange={(e) => {
											setMessage(e.target.value);
										}}
									/>
								</FormControl>
							</Grid>
						</Grid>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpenModal(false)} color="primary">
						Cancelar
					</Button>
					<Button onClick={() => setOpenModal(false)} color="primary" autoFocus>
						Agregar
					</Button>
				</DialogActions>
			</Dialog>

			<Dialog
				open={openLead}
				onClose={() => setOpenLead(false)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Nombre de lead"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpenLead(false)} color="primary">
						Cancelar
					</Button>
					<Button onClick={() => setOpenLead(false)} color="primary" autoFocus>
						Agregar
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

LeadsBooker.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeadsBooker);

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
import Button from "@material-ui/core/Button";
import { getLeads } from "../../../api/leads";
import FiltersLeads from "../LeadsFilters";
import moment from 'moment';

function LeadsTable(props) {
	const { classes } = props;
	const [leads, setLeads] = useState();
	const [page, setPage] = useState(1);
	const [size, setSize] = useState(10);
	const [initialDate, setInitialDate] = useState(moment().startOf('month').format('YYYY-MM-DD hh:mm'));
	const [finalDate, setFinalDate] = useState(moment().endOf('month').format('YYYY-MM-DD hh:mm'));
	const [totalPages, setTotalPages] = useState([]);
	const [changeStatus, setstatus] = useState();

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

	useEffect(() => {
		getLeads({ page, size, initialDate, finalDate }).then((resp) => {
			if (resp.data.message) {
				console.log(resp.data);
				setLeads(resp.data.message);
				setstatus(false);
				setTotalPages(resp.data.message.total_pages);
			} else {
				console.log(resp);
			}
		});
	}, [page, size, changeStatus, finalDate]);

	return (
		<div className={classes.rootTable}>
			<FiltersLeads
        size={size}
        setSize={setSize}
				initialDate={initialDate}
				finalDate={finalDate}
				setInitialDate={setInitialDate}
				setFinalDate={setFinalDate}
			/>
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
						<TableCell align="left">Ciudad</TableCell>
						<TableCell align="left">Estatus</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{leads
						? leads.data.map((n, index) => [
								<TableRow key={n.id}>
									<TableCell>{index + 1}</TableCell>
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
		</div>
	);
}

LeadsTable.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeadsTable);

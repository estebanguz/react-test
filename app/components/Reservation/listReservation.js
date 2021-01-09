import React, { useState, useEffect } from "react";
import styles from "enl-components/Tables/tableStyle-jss";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import useStyles from "./styles.js";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import { useGetReservation } from "./hooks/useGetReservation";

const ListReservation = (props) => {
  const { classes } = props;
  const [response, request, setRequest, setSearch] = useGetReservation();
  const [pageActual, setPageActual] = useState(1);
  const [limit, setLimit] = useState(10);
  const styles = useStyles();

  const next = () => {
    if (pageActual < response.total) {
      setPageActual(pageActual + 1);
      setRequest({ page: pageActual + 1, size: limit, filtro: request.filtro });
    }
  };
  const prev = () => {
    if (pageActual > 1) {
      setPageActual(pageActual - 1);
      setRequest({ page: pageActual - 1, size: limit, filtro: request.filtro });
    }
  };
  return (
    <React.Fragment>      
      <Box className={styles.search}>
        <Box className={styles.searchIcon}>
          <SearchIcon />
        </Box>
        <InputBase
          value={request.filtro}
          placeholder="Search ..."
          classes={{
            root: styles.inputRoot,
            input: styles.inputInput,
          }}
          onChange={(e) => {
            setPageActual(1);
            setRequest({
              page: pageActual,
              size: limit,
              filtro: e.target.value,
            });
            setSearch(true);
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </Box>
      <TableContainer component={Paper} className={classes.rootTable}>
        <Table
          size="small"
          aria-label="a dense table"
          className={classNames(classes.table, classes.hover)}
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>#HUESPED</TableCell>
              <TableCell>NOMBRE</TableCell>
              <TableCell>FECHA DE LLEGADA</TableCell>
              <TableCell>NOMBRE DEL HOTEL</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {response.result
              ? response.result.map((label, index) => [
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {" "}
                      {label.id}{" "}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {" "}
                      {label.no_huesped}{" "}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {" "}
                      {label.nombre}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {label.fecha_de_llegada}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {" "}
                      {label.hotel}{" "}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Link to={`/app/bookings/details/${label.no_huesped}`}>
                        <IconButton color="primary">
                          <VisibilityIcon />
                        </IconButton>
                      </Link>
                    </TableCell>
                  </TableRow>,
                ])
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
      <Box component="div">
        Rows per page :
        <Select
          value={limit}
          className={styles.formControl}
          variant="outlined"
          onChange={(e) => {
            setLimit(e.target.value);
            setRequest({
              page: pageActual,
              size: e.target.value,
              filtro: request.filtro,
            });
          }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
        {` Page ${pageActual} -of ${response.total}`}
        <IconButton onClick={prev} color="secondary">
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton onClick={next} color="primary">
          <NavigateNextIcon />
        </IconButton>
        {`Registros totales - ${response.count}`}
      </Box>
    </React.Fragment>
  );
};

export default withStyles(styles)(ListReservation);

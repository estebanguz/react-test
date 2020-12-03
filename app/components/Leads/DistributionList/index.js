import React, { useState, useEffect, setState } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styles from "enl-components/Tables/tableStyle-jss";
import Button from "@material-ui/core/Button";
import { setLeadsByQuantity, setLeadsByArray } from "../../../api/distribution";
import { FiltersLeads } from "../LeadsFilters";
import SelectSuggestions from "./autocomplete";
import { LeadsMuiTable } from "../ListLeads/table";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import SnackBarCustom from "../../../utils/tools/SnackBarCustom";
import { useSearchLeads } from "../ListLeads/hooks/useSearchLeads";
import { distributionStyles } from "./distributionStyles";
import { AutoCompleteSitio } from "../../AutocompleteSitio";
import { useSearchUser } from "./hooks/useSearchUser";

const useStyles = makeStyles((theme) => distributionStyles());

export const DistributionList = () => {
  const classes = useStyles();
  const [
    leads,
    setPage,
    page,
    size,
    setSize,
    initialDate,
    setInitialDate,
    finalDate,
    setFinalDate,
    setSearch,
  ] = useSearchLeads();
  const [query, usersSearch, setQuery] = useSearchUser();
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [colaborador, setColaborador] = React.useState(null);
  const [colabs, setColabs] = React.useState([]);
  const [cantidad, setCantidad] = React.useState();
  const [leadsColab, setLeadsColab] = React.useState([]);
  const [selectAll, setSelectAll] = React.useState();
  const [openSnack, setOpenSnack] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState();
  const [openError, setOpenError] = React.useState(false);

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

  return (
    <div className={classes.rootTable}>
      <FiltersLeads
        size={size}
        setSize={setSize}
        initialDate={initialDate}
        finalDate={finalDate}
        setInitialDate={setInitialDate}
        setFinalDate={setFinalDate}
        setSearch={setSearch}
      />
      <Paper className={classes.paper} elevation={4}>
        <AutoCompleteSitio
          query={query}
          setQuery={setQuery}
          data={usersSearch}
          label="Selecciona el Asesor"
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
      {leads ? (
        <LeadsMuiTable
          leads={leads}
          pageChange={setPage}
          setSearch={setSearch}
        />
      ) : (
        <></>
      )}

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
};

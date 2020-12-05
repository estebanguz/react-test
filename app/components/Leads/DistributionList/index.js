import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { setLeadsByQuantity, setLeadsByArray } from "../../../api/distribution";
import { FiltersLeads } from "../LeadsFilters";
import { LeadsMuiTable } from "../ListLeads/table";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import SnackBarCustom from "../../../utils/tools/SnackBarCustom";
import { useSearchLeads } from "../ListLeads/hooks/useSearchLeads";
import { distributionStyles } from "./distributionStyles";
import { AutoCompleteSitio } from "../../AutocompleteSitio";
import { useSearchUser } from "./hooks/useSearchUser";
import { getFreeLeads } from "../../../api/distribution";

const useStyles = makeStyles((theme) => distributionStyles(theme));

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
    setForceSearch,
  ] = useSearchLeads({ repository: getFreeLeads });
  const [
    query,
    usersSearch,
    selectedUser,
    setQuery,
    setSelectedUser,
  ] = useSearchUser();
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [cantidad, setCantidad] = React.useState();
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

  const selectLead = (id) => {
    const _leads = selectedLeads;
    const _temp = [];

    if (!selectedLeads.includes(id)) {
      _temp.push(id);
      const _new = _temp.concat(_leads);
      setSelectedLeads(_new);
    } else {
      const _index = _leads.indexOf(id);
      _leads.splice(_index, 1);
      const _new = _temp.concat(_leads);
      setSelectedLeads(_new);
    }
  };

  const handleDistribution = () => {
    if (selectedUser.id) {
      if (cantidad > 0) {
        const data = {
          broker: selectedUser.id,
          quantity: cantidad,
          initial_date: initialDate,
          final_date: finalDate,
        };
        setLeadsByQuantity({ data }).then(() => {
          setSnackMessage("Leads asignados");
          setOpenSnack(true);
          setForceSearch(true);
          setCantidad(0);
        });
      } else if (selectedLeads.length > 0) {
        const data = {
          broker: selectedUser.id,
          leads: selectedLeads,
        };
        setLeadsByArray({ data }).then(() => {
          setSnackMessage("Leads asignados");
          setOpenSnack(true);
          setForceSearch(true);
        });
      } else {
        setSnackMessage("Debes seleccionar leads antes de distribuirlos.");
        setOpenError(true);
      }
    } else {
      setSnackMessage("Selecciona un Asesor.");
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
          selectedItem={selectedUser}
          setSelectedItem={setSelectedUser}
        />
        <Grid
          container
          alignItems="flex-start"
          justify="space-around"
          row="row"
          spacing={3}
        >
          <Grid item md={6} xs={12}>
            <TextField
              id="outlined-password-input"
              label="Leads a Distribuir"
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
          <Grid item md={6} xs={12}>
            <br />
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
          actionCheckbox={selectLead}
          type="distribution"
          array={selectedLeads}
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

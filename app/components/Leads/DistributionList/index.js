import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { searchUser } from 'enl-api/users';
import { setLeadsByQuantity, setLeadsByArray } from "../../../api/distribution";
import { FiltersLeads } from "../LeadsFilters";
import { LeadsMuiTable } from "../ListLeads/table";
import SnackBarCustom from '../../../utils/tools/SnackBarCustom';
import { useSearchLeads } from '../ListLeads/hooks/useSearchLeads';
import { distributionStyles } from './distributionStyles';
import { AutoCompleteSitio } from '../../AutocompleteSitio';
import { useSearchUser } from './hooks/useSearchUser';
import { getFreeLeads } from '../../../api/distribution';
import { useUpdateComments } from './hooks/useUpdateComments';
import { LogTable } from '../../Events';
import { AutocompleteUser } from '../StatusByBooker/autocomplete';
import { useGetAutocomplete } from '../StatusByBooker/autocomplete/hooks/useGetAutocomplete';
import { useDeleteLead } from './hooks/useDeleteLead';

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
  const [getProps, selectedItem] = useGetAutocomplete({
    repository: searchUser,
  });
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [cantidad, setCantidad] = React.useState();
  const [selectAll, setSelectAll] = React.useState();
  const [openSnack, setOpenSnack] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState();
  const [openError, setOpenError] = React.useState(false);

  const [openComments, setOpenComments] = useState(false);
  const [
    currentComment,
    setCurrentComment,
    setCurrentId,
    setUpdateCommentAction,
    newComment,
    setNewComment,
  ] = useUpdateComments({ setForceUpdate: setForceSearch });

  const [deleteLead] = useDeleteLead({ setSearch });
  const handleCloseStyle = (event, reason) => {
    if (reason === 'clickaway') {
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
    if (selectedItem.id_user) {
      if (cantidad > 0) {
        const data = {
          broker: selectedItem.id_user,
          quantity: cantidad,
          initial_date: initialDate,
          final_date: finalDate,
        };
        setLeadsByQuantity({ data }).then(() => {
          setSnackMessage('Leads asignados');
          setOpenSnack(true);
          setForceSearch(true);
          setCantidad(0);
        });
      } else if (selectedLeads.length > 0) {
        const data = {
          broker: selectedItem.id_user,
          leads: selectedLeads,
        };
        setLeadsByArray({ data }).then(() => {
          setSnackMessage('Leads asignados');
          setOpenSnack(true);
          setForceSearch(true);
        });
      } else {
        setSnackMessage('Debes seleccionar leads antes de distribuirlos.');
        setOpenError(true);
      }
    } else {
      setSnackMessage('Selecciona un Asesor.');
      setOpenError(true);
    }
  };

  const handleCheckAll = () => {
    if (selectAll) {
      setSelectedLeads([]);
      setSelectAll(false);
    } else {
      const _selectedLeads = [];
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
      {leads ? (
        <LeadsMuiTable
          leads={leads}
          actionCheckbox={selectLead}
          type="distribution"
          array={selectedLeads}
          pageChange={setPage}
          commentsClick={setOpenComments}
          setCurrentComment={setCurrentComment}
          setCurrentId={setCurrentId}
          setSearch={setSearch}
          actionDelete={deleteLead}
        />
      ) : (
        <></>
      )}

      <Paper className={classes.paper} elevation={4}>
        <Grid container spacing={3}>
          <Grid item md={8} xs={12}>
            <AutocompleteUser {...getProps()} />
          </Grid>
          <Grid item md={4} xs={12}>
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

      <Paper className={classes.paper} elevation={4}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <LogTable />
          </Grid>
        </Grid>
      </Paper>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
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
          vertical: 'bottom',
          horizontal: 'left',
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
      <Dialog open={openComments} onClose={() => setOpenComments(false)}>
        <DialogTitle className={classes.titleSize} id="alert-dialog-title">
          {'Editar Comentario'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextareaAutosize
              className={classes.modalArea}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Observación"
              defaultValue={newComment}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenComments(false);
              setUpdateCommentAction(true);
            }}
            color="primary"
            autoFocus
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

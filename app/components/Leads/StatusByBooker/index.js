import React, { useState } from "react";
import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  makeStyles,
  TextareaAutosize,
  Card,
  CardContent,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MUIDataTable from "mui-datatables";
import { useParams } from "react-router";
import { useGetLead } from "./hooks/useGetLeads";
import { useGetAutocomplete } from "./autocomplete/hooks/useGetAutocomplete";
import { searchUser } from "enl-api/users";
import { Filters } from "./filters";
//import { leadsTableStyles } from "../ListLeads/styles";
import { useGetLeads } from "./autocomplete/hooks/useGetLeads";
import { getColumns } from "./columns";
import { useUpdateComments } from "../DistributionList/hooks/useUpdateComments";
import { distributionStyles } from "../DistributionList/distributionStyles";
import { StatsList } from "../../DashboardBookers/statsList";
import { Distribution } from "./reDistribution";
import { useReDistribution } from "./hooks/useReDistribution";
import { SnackNotification } from "../../helpers/snackNotification";

const useStyles = makeStyles((theme) => distributionStyles(theme));

export const StatusByBookerComponent = () => {
  const classes = useStyles();
  const _bookerId = useParams();
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [getProps, selectedItem] = useGetAutocomplete({
    repository: searchUser,
  });
  const [getPropsRe, selectedItemRe] = useGetAutocomplete({
    repository: searchUser,
  });
  const [getPropsLeads, response, setSearch, setStatus, setPage] = useGetLeads({
    selectedItem,
    setSelectedLeads,
  });

  const [collapse, setCollapse] = useState(true);

  const [bookerId, leads, setBookerId, setLeads] = useGetLead({
    id: _bookerId.bookerId ? _bookerId.bookerId : "",
  });

  const [openComments, setOpenComments] = useState(false);
  const [
    currentComment,
    setCurrentComment,
    setCurrentId,
    setUpdateCommentAction,
    newComment,
    setNewComment,
  ] = useUpdateComments({ setForceUpdate: setSearch });

  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [type, setType] = useState();

  const [statusRe, setStatusRe, setNewLeads] = useReDistribution({
    originalUser: selectedItem,
    setSnackMessage,
    setType,
    setSearch,
    setOpenSnackBar,
  });

  const options = {
    filterType: "dropdown",
    responsive: "stacked",
    print: false,
    rowsPerPage: 10,
    serverSide: true,
    search: false,
    filter: false,
    count: response ? response.total_rows : 1,
    download: false,
    selectableRows: "none",
    onTableChange: (action, tableState) => {
      switch (action) {
        case "changePage":
          setPage(tableState.page + 1);
          setSearch(true);
          break;
      }
    },
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

  const filterByStatus = ({ status }) => {
    setStatus(status);
    setSearch(true);
  };

  const columns = getColumns({
    selectLead,
    selectedLeads,
    setOpenComments,
    setCurrentComment,
  });

  return (
    <Grid container>
      <Grid item md={12}>
        <Filters
          getPropsAutoComplete={getProps}
          getPropsLeads={getPropsLeads}
        />
      </Grid>
      <Grid item md={12}>
        {response ? (
          <Card>
            <CardContent>
              <ExpansionPanel
                expanded={collapse}
                onClick={() => setCollapse(!collapse)}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">Rendimiento de Asesor</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <StatsList stats={response.stats} callback={filterByStatus} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </CardContent>
          </Card>
        ) : (
          <></>
        )}
      </Grid>
      <Grid item md={12}>
        {response ? (
          <MUIDataTable
            className={classes.table}
            title="Leads de Asesor"
            data={response.data}
            columns={columns}
            options={options}
          />
        ) : null}
      </Grid>
      {response ? (
        <Grid item md={12}>
          <Distribution
            getPropsAutoComplete={getPropsRe}
            leads={selectedLeads}
            setNewLeads={setNewLeads}
          />
        </Grid>
      ) : null}
      <SnackNotification
        message={snackMessage}
        open={openSnackBar}
        handleAction={setOpenSnackBar}
        type={type}
      />
      <Dialog open={openComments} onClose={() => setOpenComments(false)}>
        <DialogTitle className={classes.titleSize} id="alert-dialog-title">
          {"Editar Comentario"}
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
    </Grid>
  );
};

import React from "react";
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
import { leadsTableStyles } from "./styles";
import { columns } from "./columns";

const useStyles = makeStyles((theme) => leadsTableStyles(theme));

export const LeadsMuiTable = ({ leads, pageChange, setSearch }) => {
  const classes = useStyles();

  const options = {
    filterType: "dropdown",
    responsive: "stacked",
    print: false,
    rowsPerPage: 10,
    serverSide: true,
    search: false,
    filter: false,
    count: parseInt(leads.total_pages + 1),
    download: false,
    selectableRows: "none",
    onTableChange: (action, tableState) => {
      switch (action) {
        case "changePage":
          console.log(tableState);
          pageChange(tableState.page + 1);
          setSearch(true);
          break;
      }
    },
  };

  return (
    <MUIDataTable
      className={classes.table}
      title="Leads Recientes"
      data={leads.data}
      columns={columns}
      options={options}
    />
  );
};

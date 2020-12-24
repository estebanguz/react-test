import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { useParams } from "react-router";
import { useGetLead } from "./hooks/useGetLeads";
import { useGetAutocomplete } from "./autocomplete/hooks/useGetAutocomplete";
import { searchUser } from "enl-api/users";
import { Filters } from "./filters";
//import { leadsTableStyles } from "../ListLeads/styles";
import { useGetLeads } from "./autocomplete/hooks/useGetLeads";
import { getColumns } from "./columns";

export const StatusByBookerComponent = () => {
  const _bookerId = useParams();
  const columns = getColumns();
  const [getProps, selectedItem] = useGetAutocomplete({
    repository: searchUser,
  });
  const [getPropsLeads, response] = useGetLeads({ selectedItem });

  const [bookerId, leads, setBookerId, setLeads] = useGetLead({
    id: _bookerId.bookerId ? _bookerId.bookerId : "",
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
          console.log(tableState);
          pageChange(tableState.page + 1);
          setSearch(true);
          break;
      }
    },
  };

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
          <MUIDataTable
            title="Leads de Asesor"
            data={response.data}
            columns={columns}
            options={options}
          />
        ) : null}
      </Grid>
    </Grid>
  );
};

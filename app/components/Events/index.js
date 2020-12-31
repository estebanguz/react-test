import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import options from "./options";
import columns from "./columns";
import { useGetLogs } from "./hooks/useGetLogs";

export const LogTable = () => {
  const [logs] = useGetLogs();

  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <MUIDataTable
          title="Eventos Recientes"
          data={logs}
          columns={columns}
          options={options}
        />
      </Grid>
    </Grid>
  );
};

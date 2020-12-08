import React, { useState, useEffect, setState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { LeadsMuiTable } from "./table";
import styles from "enl-components/Tables/tableStyle-jss";
import { FiltersLeads } from "../LeadsFilters";
import { useSearchLeads } from "./hooks/useSearchLeads";
import { getLeads } from "../../../api/leads";

function LeadsTable(props) {
  const { classes } = props;
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
    setForceSearch
  ] = useSearchLeads({ repository: getLeads });

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
          pageChange={setPage}
          setSearch={setSearch}
          type="admin"
          actionRowComponent={() => {
            return <h1>Test</h1>
          }}
          setForceSearch={setForceSearch}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

LeadsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeadsTable);

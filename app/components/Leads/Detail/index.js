import React, { useState } from "react";
import { Grid, Paper, Tabs, Tab, makeStyles } from "@material-ui/core";
import { TabPanel } from "./tabPanel";
import { tabPanel } from "./styles/tabsStyles";
import { Detail } from "./detail";
import { Discovery } from "./discovery";
import { History } from "./history";
import { useParams } from "react-router";
import { useLeadDetail } from "./hooks/useLeadDetail";

const useStyles = makeStyles((theme) => tabPanel(theme));

export const DetailLead = () => {
  const classes = useStyles();
  const params = useParams();
  const [tabStatus, setTabStatus] = useState(0);
  const [lead] = useLeadDetail({ leadId: params.leadId });
  return (
    <Grid container>
      <Grid item md={12} xs={12}>
        <Paper className={classes.root}>
          <Tabs
            value={tabStatus}
            onChange={(e, newValue) => setTabStatus(newValue)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Información" />
            <Tab label="Discovery" />
            <Tab label="Historial del Lead" />
          </Tabs>
          {lead ? (
            <>
              <TabPanel value={tabStatus} index={0}>
                <Detail lead={lead} />
              </TabPanel>
              <TabPanel value={tabStatus} index={1}>
                <Discovery />
              </TabPanel>
              <TabPanel value={tabStatus} index={2}>
                <History />
              </TabPanel>
            </>
          ) : (
            <></>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

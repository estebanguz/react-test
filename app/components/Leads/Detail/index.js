import React, { useState } from "react";
import { Grid, Paper, Tabs, Tab, makeStyles } from "@material-ui/core";
import { TabPanel } from "./tabPanel";
import { tabPanel } from "./styles/tabsStyles";

import { Detail } from "./detail";
import { Discovery } from "./discovery";
import { History } from "./history";

const useStyles = makeStyles((theme) => tabPanel(theme));

export const DetailLead = () => {
  const classes = useStyles();
  const [tabStatus, setTabStatus] = useState(0);

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
          <TabPanel value={tabStatus} index={0}>
            <Detail />
          </TabPanel>
          <TabPanel value={tabStatus} index={1}>
            <Discovery />
          </TabPanel>
          <TabPanel value={tabStatus} index={2}>
            <History />
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
};

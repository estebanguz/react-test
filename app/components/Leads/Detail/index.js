import React, { useState } from "react";
import { Grid, Paper, Tabs, Tab, makeStyles } from "@material-ui/core";
import { TabPanel } from "./tabPanel";
import { Redirect } from "react-router";
import { tabPanel } from "./styles/tabsStyles";
import { Detail } from "./detail";
import { Discovery } from "./discovery";
import { useParams } from "react-router";
import { useLeadDetail } from "./hooks/useLeadDetail";

const useStyles = makeStyles((theme) => tabPanel(theme));

export const DetailLead = () => {
  const classes = useStyles();
  const params = useParams();
  const [tabStatus, setTabStatus] = useState(0);
  const [solicitude, setSolicitude] = useState(false);
  const [lead, setResponse] = useLeadDetail({ leadId: params.leadId });  

  return (
    <Grid container>
      {solicitude ? <Redirect to="/app/booker/solicitude" /> : <></>}
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
            <Tab
              onClick={() => setSolicitude(true)}
              label="Solicitud de Reserva"
            />
          </Tabs>
          {lead ? (
            <>
              <TabPanel value={tabStatus} index={0}>
                <Detail lead={lead} setLead={setResponse} />
              </TabPanel>
              <TabPanel value={tabStatus} index={1}>
                <Discovery lead={lead} />
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

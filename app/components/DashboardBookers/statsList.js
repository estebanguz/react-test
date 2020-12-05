import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { statsStyles } from "./styles/statsStyles";
import Grid from "@material-ui/core/Grid";
import { StatsItem } from "./statsItem";

const useStyles = makeStyles((theme) => statsStyles(theme));

export const StatsList = ({ stats }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      {stats.map((value, index) => {
        return (
          <Grid item md={2} xs={6}>
            <StatsItem stat={value} />
          </Grid>
        );
      })}
    </Grid>
  );
};

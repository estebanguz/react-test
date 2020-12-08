import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { statsStyles } from "./styles/statsStyles";
import Grid from "@material-ui/core/Grid";
import { StatsItem } from "./statsItem";

const useStyles = makeStyles((theme) => statsStyles(theme));

export const StatsList = ({ stats, filterByStatus }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid
        className={classes.itemStat}
        item
        md={3}
        xs={6}
        onClick={() => filterByStatus(0)}
      >
        <StatsItem stat={{ status: 0, count: '' }} />
        </Grid>
      {stats.map((value, index) => {
        return (
          <Grid
            className={classes.itemStat}
            onClick={() => {
              filterByStatus(value);
            }}
            item
            md={3}
            xs={6}
          >
            <StatsItem stat={value} />
          </Grid>
        );
      })}
    </Grid>
  );
};

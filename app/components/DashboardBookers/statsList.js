import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { statsStyles } from "./styles/statsStyles";
import Grid from "@material-ui/core/Grid";
import { StatsItem } from "./statsItem";

const useStyles = makeStyles((theme) => statsStyles(theme));

export const StatsList = ({ stats, callback }) => {
  const classes = useStyles();
  const [allStats, setAllStats] = useState([]);
  const status = [
    1,
    2,
    5,
    6,
    7,
    11,
    40,
    50,
    100,
    101,
    102,
    103,
    203,
    303,
    403,
    503,
    603,
  ];

  useEffect(() => {
    console.log(stats);
    generateStats();
  }, [stats]);

  const generateStats = () => {
    const _array = [];

    for (let i = 0; i < status.length; i++) {
      let _found = false;
      for (let j = 0; j < stats.length; j++) {
        if (status[i] == stats[j].status) {
          _array.push({ status: stats[j].status, count: stats[j].count });
          _found = true;
        }
      }

      if (!_found) {
        _array.push({ status: status[i], count: 0 });
      }
    }

    return setAllStats(_array);
  };

  return (
    <Grid container spacing={3}>
      {allStats.map((stat, index) => {
        return (
          <Grid
            className={classes.itemStat}
            onClick={() => {
              callback(stat);
            }}
            item
            md={3}
            xs={12}
          >
            <StatsItem stat={stat} />
          </Grid>
        );
      })}
    </Grid>
  );
};

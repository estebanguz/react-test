import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { ChartCRM } from 'enl-components';
import { styles } from './style';
import { useFilter } from './hooks/useFilter';
import { Filter } from './filters';

const useStyles = makeStyles((theme) => styles(theme));

export const BookerStatsComponent = () => {
  const [propsFromFilter, d] = useFilter();
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <Filter {...propsFromFilter} />
      </Grid>
      {d.length > 0
        ? d.map((stat, index) => {
          if (stat.stats.length > 0) {
            return (
              <Grid item md={6}>
                <Card>
                  <Typography
                    className={classes.paddingTitle}
                    variant="h6"
                    gutterBottom
                  >
                    {stat.nombre}
                  </Typography>
                  <CardContent>
                    <ChartCRM data={stat.stats} />
                  </CardContent>
                </Card>
              </Grid>
            );
          }
        })
        : null}
    </Grid>
  );
};

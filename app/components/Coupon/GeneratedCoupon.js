import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from 'enl-components/Tables/tableStyle-jss';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import SearchUi from 'enl-components';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';

const GeneratedCoupon = (props) => {
  const { classes } = props;

  const useStyles = makeStyles({
    paper: {
      padding: '16px'
    },
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center'
    },
    search: {
      width: 250,
      borderBottom: '1px solid black',
      padding: 3
    },
    cajon: {
      display: 'flex',
      justifyContent: 'space-beetwen'
    }
  });


  return (
    <React.Fragment>
      <Paper className={useStyles().paper} elevation={4}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5" component="h4">
                                Cupones Generados
            </Typography>
          </Grid>

          <Grid item>

            <InputBase className={classes.input, useStyles().search} placeholder="search" inputProps={{ 'aria-label': 'search' }} />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>

          </Grid>
        </Grid>

        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <Typography variant="h6">
                                Mostrando         10
                                resultados. Página
                                10
            </Typography>
          </div>
        </Toolbar>
        <div className={classes.rootTable}>
          <Table className={classNames(classes.table, classes.hover)}>
            <TableHead>
              <TableRow>
                <TableCell align="left">Cupon</TableCell>
                <TableCell align="left">Descripcion</TableCell>
                <TableCell align="left">Cantidad</TableCell>
                <TableCell align="left">Vigencia</TableCell>
                <TableCell align="left">Estatus</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">Cupon</TableCell>
                <TableCell align="left">Descripcion</TableCell>
                <TableCell align="left">Cantidad</TableCell>
                <TableCell align="left">Vigencia</TableCell>
                <TableCell align="left">Estatus</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className={classes.pagination, classes.table}>
            <Button variant="outlined" className={classes.button}>
              {'<<'}
            </Button>
            <Button variant="outlined" className={classes.button}>
              {'<'}
            </Button>
            <Button variant="outlined" className={classes.button}>
              {10}
            </Button>
            <span> de </span>
            <Button variant="outlined" className={classes.button}>
              {10}
            </Button>
            <Button variant="outlined" className={classes.button}>
              {'>'}
            </Button>
            <Button variant="outlined" className={classes.button}>
              {'>>'}
            </Button>
          </div>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default withStyles(styles)(GeneratedCoupon);

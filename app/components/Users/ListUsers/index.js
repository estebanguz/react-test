import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from 'enl-components/Tables/tableStyle-jss';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import { getAllUsers, disableUser } from '../../../api/users';

function UsersTable(props) {
  const { classes } = props;
  const [users, setUsers] = useState();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [totalPages, setTotalPages] = useState([]);
  const [changeStatus, setstatus] = useState();

  const prev = () => {
    if (page !== 1) setPage(page - 1);
  };

  const next = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const last = () => {
    setPage(totalPages);
  };

  const first = () => {
    setPage(1);
  };

  const disable = (id) => {    
    disableUser({ id }).then(resp => {
      if (resp) setstatus(true);
    });
  };

  useEffect(() => {
    getAllUsers({ page, size }).then(resp => {
      if (resp.data.message) {
        setUsers(resp.data.message);
        setstatus(false);
        setTotalPages(resp.data.message.total_pages);
      } else {
        console.log(resp);
      }
    });
  }, [page, size, changeStatus]);

  return (
    <div className={classes.rootTable}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <Typography variant="h6">
            Mostrando
            { ` ${size} ` }
            resultados. Página
            { ` ${page} ` }
          </Typography>
        </div>
      </Toolbar>
      <Table className={classNames(classes.table, classes.hover)}>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Rol</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users ? users.data.map((n) => [
              <TableRow key={n.id}>
                <TableCell>{n.username}</TableCell>
                <TableCell align="right">{n.email}</TableCell>
                <TableCell align="right">{n.role_id === 1 ? 'Ventas' : 'Asesor'}</TableCell>
                <TableCell align="right">
                  <Switch
                    checked={n.status === 10}
                    onChange={() => disable(n.id)}
                    value="status"
                  />
                </TableCell>
              </TableRow>,
            ]) : ''
          }
        </TableBody>
      </Table>
      <div className={classes.pagination}>
        <Button onClick={first} variant="outlined" className={classes.button}>
          {'<<'}
        </Button>
        <Button onClick={prev} variant="outlined" className={classes.button}>
          {'<'}
        </Button>
        <Button variant="outlined" className={classes.button}>
          {page}
        </Button>
        <span> de </span>
        <Button variant="outlined" className={classes.button}>
          {totalPages}
        </Button>
        <Button onClick={next} variant="outlined" className={classes.button}>
          {'>'}
        </Button>
        <Button onClick={last} variant="outlined" className={classes.button}>
          {'>>'}
        </Button>
      </div>
    </div>
  );
}

UsersTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersTable);

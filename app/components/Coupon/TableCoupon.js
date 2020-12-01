import React, { useState ,useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from 'enl-components/Tables/tableStyle-jss';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const TableCoupon = (props) => 
{
  const {classes,dataResponse} = props;
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
  const [totalPage,setTotalPage] = useState(0);
  const [pageActual,setPageActual] = useState(1);
  const [listCupones,setListCupones] = useState([]);
  const [maxFilas ,setMaxFilas] = useState(6);
  const [data,setData] = useState([])

  const next = () => {
    if(pageActual < totalPage) setPageActual(pageActual + 1)
  }
  const prev = () => {
    if(pageActual > 1) setPageActual(pageActual - 1)
  }
  const last = () => {
      setPageActual(totalPage)
  }
  const first = () => {
      setPageActual(1)
  }

  useEffect(() =>
  {             
    if(data.length > 0)
    {
        const ListTempory = []        
        const posicion = (pageActual == 1) ? 0 : ((maxFilas * pageActual - maxFilas))
        const tope = (pageActual == totalPage) ? (data.length % maxFilas) : maxFilas

        for (let i = 0; i < tope ; i++) 
        {        
          if((posicion + i) < maxFilas * pageActual)
          {
            ListTempory.push(data[(posicion + i)])       
          }        
        }
        setListCupones(ListTempory)         
    }
    else
    {
      setData(dataResponse)
      setTotalPage(Math.ceil(dataResponse.length / maxFilas))
    }   
       
  },[dataResponse,data,listCupones])

  return (
    <React.Fragment>
      <Paper className={useStyles().paper} elevation={4}>
        <Typography variant="h5" component="h4" style={{ marginBottom: 20 }}>
                                  Cupones Generados
        </Typography> 
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <Typography variant="h6">
                Mostrando
                {` ${totalPage} `}
                resultados. Página
                {` ${pageActual} `}         
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
              { listCupones
                ?  
                listCupones.map((index , n) =>[
                  <TableRow key ={n}>
                      <TableCell align="left">{index.cupon}</TableCell>
                      <TableCell align="left">{index.descripcion}</TableCell>
                      <TableCell align="left">{index.cantidad_descuento}</TableCell>
                      <TableCell align="left">{index.valido}</TableCell>
                      <TableCell align="left">{index.status}</TableCell>        
                  </TableRow>
                ])
                :""}                                  
            </TableBody>
          </Table>
          <div className={classes.pagination, classes.table}>
            <Button onClick = {first} variant="outlined" className={classes.button}>
              {'<<'}
            </Button>
            <Button onClick = {prev} variant="outlined" className={classes.button}>
              {'<'}
            </Button>
            <Button variant="outlined" className={classes.button}>
              {pageActual}
            </Button>
            <span> de </span>
            <Button variant="outlined" className={classes.button}>
              {totalPage}
            </Button>
            <Button onClick = {next} variant="outlined" className={classes.button}>
              {'>'}
            </Button>
            <Button onClick = {last} variant="outlined" className={classes.button}>
              {'>>'}
            </Button>
          </div>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default withStyles(styles)(TableCoupon);

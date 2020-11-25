import React from 'react';
import MUIDataTable from 'mui-datatables';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { StarsCategory } from './stars';

const useStyles = makeStyles((theme) => ({
  table: {
    '& > div': {
      overflow: 'auto',
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all',
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          height: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    },
  },
}));

const columns = [
  {
    name: 'Hotel',
    options: {
      filter: true,
    },
  },
  {
    name: 'Categoria',
    options: {
      filter: true,
      customBodyRender: (value) => <StarsCategory value={value} />,
    },
  },
  {
    name: 'Tipo',
    options: {
      filter: true,
    },
  },
  {
    name: 'Precio',
    options: {
      filter: true,
      customBodyRender: (value) => {
        const nf = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'MXN',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

        return nf.format(value);
      },
    },
  },
  {
    name: 'Oferta',
    options: {
      filter: true,
    },
  },
  {
    name: 'Reservar',
    options: {
      filter: false,
      customBodyRender: (value) => (
        <Link to={{
          pathname: `/app/agency/hotel/details/${value}`,
        }}
        >
          <Button variant="contained" color="primary">
							Reservar

          </Button>
        </Link>
      ),
    },
  },
];

export const HotelList = ({ hotels }) => {
  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    print: false,
    rowsPerPage: 10,
    page: 0,
    download: false,
    selectableRows: false

  };
  const classes = useStyles();

  const _data = [];
  hotels.map((hotel, index) => {
    _data.push([hotel.name, hotel.category, hotel.type, hotel.offers != 0 ? hotel.offers.precio_real : hotel.minRate, '', hotel.url]);
  });

  return (
    <div>
      <MUIDataTable
        className={classes.table}
        title="Hoteles en Cancun"
        data={_data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { StarsCategory } from '../stars';

export const columnsHab = [
  {
    name: 'Habitación',
    options: {
      filter: true,
    },
  },
  {
    name: 'Board Name',
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
    name: 'Reservar',
    options: {
      filter: false,
      customBodyRender: (value) => (
        <Button onClick={value} variant="contained" color="primary">
                        Reservar
        </Button>
      ),
    },
  },
];


export const columnsHotels = [
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

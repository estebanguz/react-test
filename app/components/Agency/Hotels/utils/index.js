import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { StarsCategory } from '../stars';
import { Typography } from '@material-ui/core';

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
      sortThirdClickReset: true,
      sortDescFirst: true,
    },
  },
  {
    name: 'Categoria',
    options: {
      filter: true,
      customBodyRender: (value) => <StarsCategory value={value} />,
      sortThirdClickReset: true,
    },
  },
  {
    name: 'Tipo',
    options: {
      filter: true,
      sortThirdClickReset: true,
    },
  },
  {
    name: 'Precio',
    options: {
      filter: true,
      sortThirdClickReset: true,
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
      sortThirdClickReset: true,
    },    
  },
  {
    name: 'Reservar',
    options: {
      filter: false,
      sortThirdClickReset: true,
      customBodyRender: (value) => (
        <Link to={{
          pathname: `/app/agency/hotels/${value}`,
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

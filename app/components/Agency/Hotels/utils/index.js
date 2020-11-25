import React from 'react';
import Button from '@material-ui/core/Button';

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

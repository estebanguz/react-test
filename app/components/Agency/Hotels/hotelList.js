import React from 'react';
import MUIDataTable from 'mui-datatables';
import { makeStyles } from '@material-ui/core/styles';
import { columnsHotels } from './utils/index';

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
        columns={columnsHotels}
        options={options}
      />
    </div>
  );
};
import React from 'react';
import MUIDataTable from 'mui-datatables';
import { makeStyles } from '@material-ui/core/styles';
import { leadsTableStyles } from './styles';
import { columns } from './columns';

const useStyles = makeStyles((theme) => leadsTableStyles(theme));

export const LeadsMuiTable = ({
  leads,
  label,
  type = 'leads',
  actionCheckbox,
  pageChange,
  array = '',
  setSearch,
  emailAction = () => {
    console.log('');
  },
  phoneAction = () => {
    console.log('');
  },
  whatsappAction = () => {
    console.log('');
  },
  viewAction = () => {
    console.log('');
  },
  actionRowComponent,
  setForceSearch,
  commentsClick,
  setCurrentComment,
  setCurrentId,
  actionDelete
}) => {
  const classes = useStyles();
  const _columns = columns({
    type,
    actionCheckbox,
    array,
    emailAction,
    phoneAction,
    whatsappAction,
    viewAction,
    ActionRowComponent: actionRowComponent,
    setForceSearch,
    commentsClick,
    setCurrentComment,
    setCurrentId,
    actionDelete
  });

  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    print: false,
    rowsPerPage: 10,
    serverSide: true,
    search: false,
    filter: false,
    count: leads.total_rows,
    download: false,
    selectableRows: 'none',
    onTableChange: (action, tableState) => {
      switch (action) {
        case 'changePage':
          console.log(tableState);
          pageChange(tableState.page + 1);
          setSearch(true);
          break;
      }
    },
  };

  return (
    <MUIDataTable
      className={classes.table}
      title={`${
        type == 'leads'
          ? 'Leads Recientes'
          : label
      }`}
      data={leads.data}
      columns={_columns}
      options={options}
    />
  );
};

export default {
  filterType: "dropdown",
  responsive: "stacked",
  print: false,
  rowsPerPage: 10,
  serverSide: true,
  search: false,
  filter: false,
  count: 1,
  download: false,
  selectableRows: "none",
  onTableChange: (action, tableState) => {
    switch (action) {
      case "changePage":
        console.log(tableState);
        pageChange(tableState.page + 1);
        setSearch(true);
        break;
    }
  },
};

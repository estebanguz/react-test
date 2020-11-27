export const autocomplete = (theme) => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
    top: '100%',
    overflowY: 'scroll',
    maxHeight: '50vh'
  },
  item: {
    display: 'flex',
    padding: '10px',
    border: '1px solid #cacaca38',
    //background: '#303030',
    cursor: 'pointer'
  },
  itemHover: {
    background: '#444444'
  }
});

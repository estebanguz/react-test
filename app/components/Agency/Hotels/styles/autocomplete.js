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
    borderRadius: 0,
    padding: '10px'
  },
  itemHover: {
    background: '#444444'
  }
});

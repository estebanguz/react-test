// eslint-disable-next-line import/prefer-default-export
export const styles = (theme) => ({
  paper: {
    padding: "16px",
  },
  filterInput: {
    width: "100%",
  },
  button: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center'
  }
});

export const customStyles = (theme) => ({
  button: {
    margin: "10px",
  },
  rightIcon: {
    marginLeft: "30px",
  },
  paper: {
    position: "absolute",
    width: theme.spacing(50),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
  },
  formControl: {
    width: "100%",
  },
  statusSelect: {
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "-20px",
    },
  },
  progress: {
    margin: "15px",
  },
  progressDiv: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
});

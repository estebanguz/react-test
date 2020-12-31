export const distributionStyles = (theme) => ({
  paper: {
    padding: "16px",
  },
  textField: {
    width: "100%",
  },
  button: {
    width: "100%",
  },
  modalArea: {
    width: "100%",
  },
  titleSize: {
    width: "50vw",
  },
  table: {
    "& > div": {
      overflow: "auto",
    },
    "& table": {
      "& td": {
        wordBreak: "keep-all",
      },
      [theme.breakpoints.down("md")]: {
        "& td": {
          height: 70,
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      [theme.breakpoints.down("xs")]: {
        "& tr": {
          borderBottom: "4px solid #7bd5ff",
        },
      },
    },
  },
});

export const autocompleteStyles = (theme) => ({
  input: {
    width: "100%",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "100%",
    zIndex: 1000,
    overflowY: "scroll",
    maxHeight: "50vh",
  },
  item: {
    borderRadius: 0,
    padding: "10px",
    cursor: "pointer",
  },
});

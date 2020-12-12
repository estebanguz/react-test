import React from "react";
import { makeStyles } from "@material-ui/core";
import { tabPanel } from "./styles/tabsStyles";

const useStyles = makeStyles((theme) => tabPanel(theme));

export const TabPanel = ({ value, index, children }) => {
  const classes = useStyles();

  return (
    <div hidden={value != index} className={classes.panelContainer}>
      {value == index ? children : <></>}
    </div>
  );
};

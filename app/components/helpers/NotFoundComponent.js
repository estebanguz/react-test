import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { notfound } from "./styles/notfound";

const useStyles = makeStyles((theme) => notfound(theme));

export const NotFoundComponent = () => {
  const classes = useStyles();

  return <Typography className={classes.results}>No hay resultados</Typography>;
};

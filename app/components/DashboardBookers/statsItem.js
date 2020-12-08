import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { statsStyles } from "./styles/statsStyles";
import { leadStatusDesc } from "../../utils/tools/leadStatusDesc";

const useStyles = makeStyles((theme) => statsStyles());

export const StatsItem = ({ stat }) => {
  const letter = leadStatusDesc({ status: stat.status });
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {letter ? letter[0] : "F"}
          </Avatar>
        }
        title={letter ? letter : "Reiniciar Filtros"}
        subheader={stat.count}
      />
    </Card>
  );
};

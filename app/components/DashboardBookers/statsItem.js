import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from "@material-ui/core/styles";
import { statsStyles } from "./styles/statsStyles";

const useStyles = makeStyles((theme) => statsStyles());

export const StatsItem = ({ stat }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={stat.desc}
        subheader={stat.count}
      />
    </Card>
  );
};

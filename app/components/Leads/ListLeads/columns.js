import React from "react";
import Button from "@material-ui/core/Button";
import moment from "moment";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CallIcon from "@material-ui/icons/Call";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import { leadsTableStyles } from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const classes = makeStyles((theme) => leadsTableStyles(theme));

export const columns = [
  {
    name: "fecha",
    label: "Fecha",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        return moment(value).format("ll");
      },
    },
  },
  {
    name: "nombre",
    label: "Nombre",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "email",
    label: "Email",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        return (
          <div className={classes.buttonsIcons}>
            <IconButton aria-label="view">
              <EmailIcon />
            </IconButton>
          </div>
        );
      },
    },
  },
  {
    name: "telefono",
    label: "Telefono",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        return (
          <div className={classes.buttonsIcons}>
            <IconButton color="primary" aria-label="view">
              <CallIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="view">
              <WhatsAppIcon />
            </IconButton>
          </div>
        );
      },
    },
  },
  {
    name: "ciudad",
    label: "Ciudad",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "id",
    label: "Accion",
    options: {
      filter: false,
      customBodyRender: (value) => {
        return (
          <div className={classes.buttonsIcons}>
            <IconButton aria-label="view">
              <VisibilityIcon />
            </IconButton>
          </div>
        );
      },
    },
  },
];

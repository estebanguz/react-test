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
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import base64 from "base-64";

const classes = makeStyles((theme) => leadsTableStyles(theme));

export const columns = ({
  type,
  actionCheckbox,
  array,
  emailAction,
  phoneAction,
  whatsappAction,
  viewAction,
  ActionRowComponent,
  setForceSearch,
  commentsClick,
  setCurrentComment,
  setCurrentId,
}) => {
  let _array = [];

  if (type == "distribution") {
    _array.push({
      name: "id",
      label: "#",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => {
          return type == "leads" ? (
            1
          ) : (
            <Checkbox
              checked={array.includes(value)}
              onClick={() => actionCheckbox(value)}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          );
        },
      },
    });
  }

  if (type == "distribution") {
    _array.push({
      name: "fecha",
      label: "Fecha",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          return moment(value).format("ll");
        },
      },
    });
  } else {
    _array.push({
      name: "fecha_asignacion",
      label: "Fecha de Asignación",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          return moment(value).format("ll");
        },
      },
    });
  }

  _array.push({
    name: "nombre",
    label: "Nombre",
    options: {
      filter: true,
      sort: false,
    },
  });

  _array.push({
    name: "telefono",
    label: "Teléfono",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        return value;
      },
    },
  });

  if (type == "leads") {
    _array.push({
      name: "telefono",
      label: "Telefono",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          const phone = value;
          return (
            <div className={classes.buttonsIcons}>
              <IconButton
                onClick={() => phoneAction({ phone })}
                color="primary"
                aria-label="view"
              >
                <CallIcon />
              </IconButton>
              <IconButton
                onClick={() => whatsappAction({ phone })}
                color="secondary"
                aria-label="view"
              >
                <WhatsAppIcon />
              </IconButton>
            </div>
          );
        },
      },
    });
  }

  _array.push({
    name: "ciudad",
    label: "Ciudad",
    options: {
      filter: true,
      sort: false,
    },
  });

  if (type != "distribution" && type != "admin") {
    _array.push({
      name: "status_lead",
      label: "Estatus",
      options: {
        filter: false,
        customBodyRender: (value) => {
          return (
            <div className={`${classes.buttonsIcons} ${classes.status}`}>
              <ActionRowComponent
                setForceSearch={setForceSearch}
                lead={value}
              />
            </div>
          );
        },
      },
    });
  }

  if (type != "distribution" && type != "admin") {
    _array.push({
      name: "id",
      label: "Ver",
      options: {
        filter: false,
        customBodyRender: (value) => {
          return (
            <Link to={`/app/booker/leads/${base64.encode(value)}`}>
              <IconButton
                onClick={() => viewAction()}
                color="primary"
                aria-label="view"
              >
                <VisibilityIcon />
              </IconButton>
            </Link>
          );
        },
      },
    });
  }

  return _array;
};

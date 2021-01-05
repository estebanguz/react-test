import React from "react";
import Button from "@material-ui/core/Button";
import moment from "moment";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/RemoveRedEye";
import CallIcon from "@material-ui/icons/Call";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import base64 from "base-64";
import { leadsTableStyles } from "./styles";

const classes = makeStyles((theme) => leadsTableStyles(theme));

export const columns = ({
  type,
  actionCheckbox,
  array,
  phoneAction,
  whatsappAction,
  viewAction,
  ActionRowComponent,
  setForceSearch,
  actionDelete,
}) => {
  const _array = [];

  if (type == "distribution") {
    _array.push({
      name: "id",
      label: "#",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) =>
          type == "leads" ? (
            1
          ) : (
            <Checkbox
              checked={array.includes(value)}
              onClick={() => actionCheckbox(value)}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          ),
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
        customBodyRender: (value) => moment(value).format("ll"),
      },
    });
  } else {
    _array.push({
      name: "fecha_asignacion",
      label: "Fecha de Asignación",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => moment(value).format("ll"),
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
      customBodyRender: (value) => value,
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
        customBodyRender: (value) => (
          <div className={`${classes.buttonsIcons} ${classes.status}`}>
            <ActionRowComponent setForceSearch={setForceSearch} lead={value} />
          </div>
        ),
      },
    });
  }

  if (type != "distribution" && type != "admin") {
    _array.push({
      name: "id",
      label: "Ver",
      options: {
        filter: false,
        customBodyRender: (value) => (
          <Link to={`/app/booker/leads/${base64.encode(value)}`}>
            <IconButton
              onClick={() => viewAction()}
              color="primary"
              aria-label="view"
            >
              <VisibilityIcon />
            </IconButton>
          </Link>
        ),
      },
    });
  }

  if (type == "distribution") {
    _array.push({
      name: "id",
      label: "Eliminar",
      options: {
        filter: false,
        customBodyRender: (value) => (
          <IconButton
            onClick={() => actionDelete(value)}
            color="primary"
            aria-label="view"
          >
            <Delete />
          </IconButton>
        ),
      },
    });
  }

  return _array;
};

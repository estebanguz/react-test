import React from "react";
import { Checkbox, TextField } from "@material-ui/core";
import { leadStatusDesc } from "../../../utils/tools/leadStatusDesc";
import moment from "moment";

export const getColumns = ({
  selectLead,
  selectedLeads,
  setOpenComments,
  setCurrentComment,
}) => {
  return [
    {
      name: "id",
      label: "#",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => {
          return (
            <Checkbox
              checked={selectedLeads.includes(value)}
              onClick={() => selectLead(value)}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          );
        },
      },
    },
    {
      name: "fecha_asignacion",
      label: "Fecha de Asignación",
      options: {
        filter: false,
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
        filter: false,
        sort: false,
      },
    },
    {
      name: "telefono",
      label: "Teléfono",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "status",
      label: "Estatus",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => {
          return leadStatusDesc({ status: parseInt(value) });
        },
      },
    },
    {
      name: "observacion",
      label: "Observación",
      options: {
        filter: false,
        customBodyRender: (value) => {
          return (
            <TextField
              value={value.comments}
              onClick={(e) => {
                setOpenComments(true);
                setCurrentComment(value);
              }}
            />
          );
        },
      },
    },
  ];
};

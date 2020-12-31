import React, { useState } from "react";
import { injectIntl } from "react-intl";
import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import SnackBarCustom from "../../../utils/tools/SnackBarCustom";
import { InfoGeneral, InfoLocation } from "./formLead.js";
import { useLeadData } from "../hooks/useLeadData.js";
import { useCreateLead } from "../hooks/useCreateLead.js";
import { MaterialDropZone } from "enl-components";
import { useUploadFile } from "../hooks/useUploadFile";

const NewLead = () => {
  const useStyles = makeStyles({
    root: {},
    paper: {
      margin: "16px",
    },
  });
  const [data, setForm] = useLeadData();
  const [nextForm, setNextForm] = useState(0);
  const [openSnack, setOpenSnack] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const groupName = ["Info General", "Localidad"];
  const [files, setFiles] = useUploadFile({ setOpenSnack, setSnackMessage });
  const [addNewLead] = useCreateLead();

  const groupForm = (index) => {
    switch (index) {
      case 0:
        return <InfoGeneral data={data} setForm={setForm} />;

      case 1:
        return <InfoLocation data={data} setForm={setForm} />;

      default:
        return "Unknown";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      Object.keys(data.nombre).length > 0 &&
      Object.keys(data.telefono).length > 0
    ) {
      const res = await addNewLead({ data });
      if (res.status === 200) {
        setForm({
          nombre: "",
          edad: "",
          telefono: "",
          mensaje: "",
          estado: "",
          ciudad: "",
          municipio: "",
        });
        setNextForm(0);
        setSnackMessage("Lead Agregado exitosamente...");
        setOpenSnack(true);
      } else {
        console.log("error");
        setSnackMessage("error");
        setOpenError(true);
      }
    } else {
      setSnackMessage("hay campos obligatorios");
      setOpenWarning(true);
    }
  };
  const handleCloseStyle = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
    setOpenError(false);
    setOpenWarning(false);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h4" style={{ marginBottom: 10 }}>
          Crear nuevo Leads
        </Typography>
        <Grid container>
          <Stepper activeStep={nextForm} orientation="vertical">
            {groupName.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{groupForm(index)}</Typography>
                  <Button
                    disabled={nextForm === 0}
                    onClick={() => {
                      setNextForm(nextForm - 1);
                    }}
                  >
                    Anterior
                  </Button>
                  <Button
                    color="primary"
                    onClick={async (e) => {
                      if (nextForm === 1) {
                        handleSubmit(e);
                      } else {
                        setNextForm(nextForm + 1);
                      }
                    }}
                  >
                    {nextForm === 1 ? "Guardar" : "Siguiente"}
                  </Button>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          <Grid item md={12}>
            <Paper className={classes.paper}>
              <h6>Subir archivo de leads</h6>
              <MaterialDropZone
                files={files}
                setFiles={setFiles}
                showPreviews={false}
                maxSize={5000000}
                filesLimit={1}
                text="Arrastre el archivo o de click aquí"
              />
            </Paper>
          </Grid>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={openSnack}
            autoHideDuration={6000}
            onClose={handleCloseStyle}
          >
            <SnackBarCustom
              className={classes.root}
              variant="success"
              message={snackMessage}
              onClose={handleCloseStyle}
            />
          </Snackbar>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={openError}
            autoHideDuration={6000}
            onClose={handleCloseStyle}
          >
            <SnackBarCustom
              className={classes.root}
              variant="error"
              message={snackMessage}
              onClose={handleCloseStyle}
            />
          </Snackbar>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={openWarning}
            autoHideDuration={6000}
            onClose={handleCloseStyle}
          >
            <SnackBarCustom
              className={classes.root}
              variant="warning"
              message={snackMessage}
              onClose={handleCloseStyle}
            />
          </Snackbar>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};
export default injectIntl(NewLead);

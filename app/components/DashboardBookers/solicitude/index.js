import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router";
import { NewReservation } from "./NewReservation";
import { GuestData } from "./GuestData";
import { CoupleData } from "./CoupleData";
import { PaymentMethod } from "./PaymentMethod";
import { ContactData } from "./ContactData";
import { PooledIncome } from "./PooleIncome";
import { Companions } from "./Companions";
import { RoomDescription } from "./RoomDescription";

// custom hooks
import { useNewReservation } from "../hooks/useNewReservation";
import { useGuestData } from "../hooks/useGuestData";
import { useCoupleData } from "../hooks/useCoupleData";
import { usePaymentMethod } from "../hooks/usePaymentMethod";
import { useContactData } from "../hooks/useContactData";
import { usePooledIncoming } from "../hooks/usePooledIncome";
import { useCompanion } from "../hooks/useCompanions";
import { useRoomDescription } from "../hooks/useRoomDescription";
import { useReservation } from "../hooks/useReservation";

// schema validation
import { validateComponent } from "./validations";

const styles = (theme) => ({
  root: {
    width: "90%",
  },
  button: {
    marginTop: "5px",
    marginRight: "5px",
  },
  actionsContainer: {
    marginBottom: "5px",
  },
  resetContainer: {
    padding: "5px",
  },
});

function getSteps() {
  return [
    "Nueva Reservación",
    "Datos del Huésped",
    "Datos de la Pareja",
    "Métodos de pago",
    "Información de Contacto",
    "Ingresos mancomunados",
    "Acompañantes",
    "Descripción de la Habitación",
  ];
}

export const SolicitudeStepper = () => {
  const params = useParams();
  const [activeStep, setActiveStep] = useState(0);
  const [getPropsReservation, getValidateData] = useNewReservation();
  const [getPropsGuesData, getValidateGuestData] = useGuestData({ leadId: params.leadId });
  const [getPropsCouple] = useCoupleData();
  const [getPropsPaymentMethod, getValidationPaymentData] = usePaymentMethod();
  const [getPropsContactData, getValidationContactData] = useContactData({ leadId: params.leadId });
  const [companions, addCompanion] = useCompanion();
  const [getPropsRoom] = useRoomDescription({ leadId: params.leadId });
  const [redirect, setRedirect] = useState(false);
  const [aprox, realQty, setAprox, setRealQty] = usePooledIncoming();
  const classes = styles();
  const steps = getSteps();  
  const [addReservation] = useReservation();


  useEffect(() => {
    console.log(`Index ${companions}`);
  }, [companions]);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <NewReservation {...getPropsReservation()} />;
      case 1:
        return <GuestData {...getPropsGuesData()} />;
      case 2:
        return <CoupleData {...getPropsCouple()} />;
      case 3:
        return <PaymentMethod {...getPropsPaymentMethod()} />;
      case 4:
        return <ContactData {...getPropsContactData()} />;
      case 5:
        return (
          <PooledIncome
            aprox={aprox}
            realQty={realQty}
            setAprox={setAprox}
            setRealQty={setRealQty}
          />
        );
      case 6:
        return (
          <Companions companions={companions} addCompanion={addCompanion} />
        );
      case 7:
        return <RoomDescription {...getPropsRoom()} />;
      default:
        return "Unknown step";
    }
  };

  return (
    <div className={classes.root}>
      {redirect ? <Redirect to="/app/booker/leads" /> : null}
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={() => {
                      setActiveStep(activeStep - 1);
                    }}
                    className={classes.button}
                  >
                    Anterior
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={async () => {
                      if (activeStep === steps.length - 1) {
                        const res = await addReservation({
                          getPropsReservation,
                          getPropsGuesData,
                          getPropsCouple,
                          getPropsPaymentMethod,
                          getPropsContactData,
                          companions,
                          getPropsRoom,
                          aprox,
                          realQty,
                        });
                        if (res.status == 200) {
                          setActiveStep(activeStep + 1);
                          setRedirect(true);
                        }
                      } else if (
                        validateComponent({
                          step: activeStep,
                          getValidateData,
                          getValidateGuestData,
                          getValidationPaymentData,
                          getValidationContactData,
                        })                        
                      ) {
                        setActiveStep(activeStep + 1);
                      } else {
                        console.log("Error");
                      }
                    }}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? "Agregar Solicitud de Reserva"
                      : "Siguiente"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={1} className={classes.resetContainer}>
          <Typography>Se ha agregado la solicitud de Reserva</Typography>
          <Button onClick={() => setActiveStep(0)} className={classes.button}>
            Iniciar una nueva
          </Button>
        </Paper>
      )}
    </div>
  );
};

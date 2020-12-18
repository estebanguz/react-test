import React, { useState, useEffect } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { NewReservation } from "./newreservation";
import { GuestData } from "./guestdata";
import { CoupleData } from "./coupledata";
import { PaymentMethod } from "./paymentmethod";
import { ContactData } from "./contactdata";
import { PooledIncome } from "./pooledincome";
import { Companions } from "./companions";
import { RoomDescription } from "./roomdescription";
import { Redirect } from "react-router";

//custom hooks
import { useNewReservation } from "../hooks/useNewReservation";
import { useGuestData } from "../hooks/useGuestData";
import { useCoupleData } from "../hooks/useCoupleData";
import { usePaymentMethod } from "../hooks/usePaymentMethod";
import { useContactData } from "../hooks/useContactData";
import { usePooledIncoming } from "../hooks/usePooledIncome";
import { useCompanion } from "../hooks/useCompanions";
import { useRoomDescription } from "../hooks/useRoomDescription";
import { useReservation } from "../hooks/useReservation";

//schema validation
import { validationHandler } from "./validations";
import { NewReservationSchema } from "site-schemas/newReservation";
import { GuestDataSchema } from "site-schemas/guesData";
import { PaymentMethodSchema } from "site-schemas/paymentMethod";
import { ContactInfoSchema } from "site-schemas/contactInfo";

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
  const [activeStep, setActiveStep] = useState(0);
  const [
    guest,
    setGuest,
    separated,
    setSeparated,
    mark,
    setMark,
    booker,
    setBooker,
    registerDate,
    setRegisterDate,
    gUser,
  ] = useNewReservation();
  const [
    guestName,
    guestAge,
    guestProffession,
    guestCompany,
    guestPosition,
    guestMartialStatus,
    guestAddress,
    guestCity,
    guestState,
    guestCp,
    setGuestName,
    setGuestAge,
    setGuestProfession,
    setGuestCompany,
    setGuestPosition,
    setGuestMaritalStatus,
    setGuestAddress,
    setGuestCity,
    setGuestState,
    setGuestCp,
  ] = useGuestData();
  const [
    coupleName,
    coupleAge,
    coupleOcupation,
    coupleCompany,
    couplePosition,
    setCoupleName,
    setCoupleAge,
    setCoupleOcupation,
    setCoupleCompany,
    setCouplePosition,
  ] = useCoupleData();
  const [
    cardNumber,
    cardName,
    cardExp,
    cardCvc,
    cardType,
    cardBank,
    cardConcept,
    quantity,
    setCardNumber,
    setCardName,
    setCardExp,
    setCardCvc,
    setCardType,
    setCardBank,
    setCardConcept,
    setQuantity,
  ] = usePaymentMethod();
  const [
    phone1,
    phone2,
    email1,
    email2,
    setPhone1,
    setPhone2,
    setEmail1,
    setEmail2,
  ] = useContactData();
  const [companions, addCompanion] = useCompanion();
  const [
    hotel,
    hotels,
    destination,
    type,
    nights,
    room,
    openDates,
    arrivalDate,
    departureDate,
    pax,
    presentation,
    validity,
    typeId,
    cardType1,
    bank1,
    cardType2,
    bank2,
    transportation,
    internalNotes,
    externalNotes,
    quantityCards,
    total,
    setHotel,
    setDestination,
    setType,
    setNights,
    setRoom,
    setOpenDates,
    setArrivalDate,
    setDepartureDate,
    setPax,
    setPresentation,
    setValidity,
    setTypeId,
    setTypeCard1,
    setBank1,
    setTypeCard2,
    setBank2,
    setTransportation,
    setInternalNotes,
    setExternalNotes,
    setQuantityCards,
    setTotal,
  ] = useRoomDescription();

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    console.log(`Index ${companions}`);
  }, [companions]);

  const [aprox, realQty, setAprox, setRealQty] = usePooledIncoming();
  const classes = styles();
  const steps = getSteps();

  const [addReservation] = useReservation();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <NewReservation
            guest={guest}
            setGuest={setGuest}
            separated={separated}
            setSeparated={setSeparated}
            mark={mark}
            setMark={setMark}
            booker={booker}
            setBooker={setBooker}
            registerDate={registerDate}
            setRegisterDate={setRegisterDate}
          />
        );
      case 1:
        return (
          <GuestData
            guestName={guestName}
            guestAge={guestAge}
            guestProffession={guestProffession}
            guestCompany={guestCompany}
            guestPosition={guestPosition}
            guestMartialStatus={guestMartialStatus}
            guestAddress={guestAddress}
            guestCity={guestCity}
            guestState={guestState}
            guestCp={guestCp}
            setGuestName={setGuestName}
            setGuestAge={setGuestAge}
            setGuestProfession={setGuestProfession}
            setGuestCompany={setGuestCompany}
            setGuestPosition={setGuestPosition}
            setGuestMaritalStatus={setGuestMaritalStatus}
            setGuestAddress={setGuestAddress}
            setGuestCity={setGuestCity}
            setGuestState={setGuestState}
            setGuestCp={setGuestCp}
          />
        );
      case 2:
        return (
          <CoupleData
            coupleName={coupleName}
            coupleAge={coupleAge}
            coupleOcupation={coupleOcupation}
            coupleCompany={coupleCompany}
            couplePosition={couplePosition}
            setCoupleName={setCoupleName}
            setCoupleAge={setCoupleAge}
            setCoupleOcupation={setCoupleOcupation}
            setCoupleCompany={setCoupleCompany}
            setCouplePosition={setCouplePosition}
          />
        );
      case 3:
        return (
          <PaymentMethod
            cardNumber={cardNumber}
            cardName={cardName}
            cardExp={cardExp}
            cardCvc={cardCvc}
            cardType={cardType}
            cardBank={cardBank}
            cardConcept={cardConcept}
            quantity={quantity}
            setCardNumber={setCardNumber}
            setCardName={setCardName}
            setCardExp={setCardExp}
            setCardCvc={setCardCvc}
            setCardType={setCardType}
            setCardBank={setCardBank}
            setCardConcept={setCardConcept}
            setQuantity={setQuantity}
          />
        );
      case 4:
        return (
          <ContactData
            phone1={phone1}
            phone2={phone2}
            email1={email1}
            email2={email2}
            setPhone1={setPhone1}
            setPhone2={setPhone2}
            setEmail1={setEmail1}
            setEmail2={setEmail2}
          />
        );
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
        return (
          <RoomDescription
            hotel={hotel}
            hotels={hotels}
            destination={destination}
            type={type}
            nights={nights}
            room={room}
            openDates={openDates}
            arrivalDate={arrivalDate}
            departureDate={departureDate}
            pax={pax}
            presentation={presentation}
            validity={validity}
            typeId={typeId}
            cardType1={cardType1}
            bank1={bank1}
            cardType2={cardType2}
            bank2={bank2}
            transportation={transportation}
            internalNotes={internalNotes}
            externalNotes={externalNotes}
            quantityCards={quantityCards}
            total={total}
            setHotel={setHotel}
            setDestination={setDestination}
            setType={setType}
            setNights={setNights}
            setRoom={setRoom}
            setOpenDates={setOpenDates}
            setArrivalDate={setArrivalDate}
            setDepartureDate={setDepartureDate}
            setPax={setPax}
            setPresentation={setPresentation}
            setValidity={setValidity}
            setTypeId={setTypeId}
            setTypeCard1={setTypeCard1}
            setBank1={setBank1}
            setTypeCard2={setTypeCard2}
            setBank2={setBank2}
            setTransportation={setTransportation}
            setInternalNotes={setInternalNotes}
            setExternalNotes={setExternalNotes}
            setQuantityCards={setQuantityCards}
            setTotal={setTotal}
          />
        );
      default:
        return "Unknown step";
    }
  };

  const validateComponent = ({ step }) => {
    let response = false;
    switch (step) {
      case 0:
        const validate = validationHandler({
          data: { guest, separated, mark },
          validateSchema: NewReservationSchema,
        });

        if (validate !== true) {
          response = false;
        } else {
          response = validate;
        }
        break;

      case 1:
        const validateG = validationHandler({
          data: { guestName, guestAge },
          validateSchema: GuestDataSchema,
        });

        if (validateG !== true) {
          response = false;
        } else {
          response = validateG;
        }
        break;
      case 3:
        const validatePM = validationHandler({
          data: {
            cardNumber,
            cardName,
            cardExp,
            cardCvc,
            cardType,
            cardBank: cardBank.value,
            cardConcept,
            quantity,
          },
          validateSchema: PaymentMethodSchema,
        });

        if (validatePM !== true) {
          response = false;
        } else {
          response = validatePM;
        }
        break;
      case 4:
        console.log("Contact Info");
        const validateCI = validationHandler({
          data: {
            phone1,
            email1,
          },
          validateSchema: ContactInfoSchema,
        });
        if (validateCI !== true) {
          console.log(validateCI);
          response = false;
        } else {
          response = validateCI;
        }
        break;
      default:
        response = true;
        break;
    }

    console.log(response);

    return response;
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
                          guest,
                          registerDate,
                          separated,
                          mark,
                          guestName,
                          guestAge,
                          guestProffession,
                          guestCompany,
                          guestPosition,
                          guestMartialStatus,
                          guestAddress,
                          guestCity,
                          guestState,
                          guestCp,
                          coupleName,
                          coupleAge,
                          coupleOcupation,
                          coupleCompany,
                          couplePosition,
                          cardNumber,
                          cardName,
                          cardExp,
                          cardCvc,
                          cardType,
                          cardBank,
                          cardConcept,
                          quantity,
                          phone1,
                          phone2,
                          email1,
                          email2,
                          companions,
                          hotel,
                          destination,
                          type,
                          nights,
                          room,
                          openDates,
                          arrivalDate,
                          departureDate,
                          pax,
                          presentation,
                          validity,
                          typeId,
                          cardType1,
                          bank1,
                          cardType2,
                          bank2,
                          transportation,
                          internalNotes,
                          externalNotes,
                          quantityCards,
                          total,
                          aprox,
                          realQty,
                        });
                        if (res.status == 200) {
                          setActiveStep(activeStep + 1);
                          setRedirect(true);
                        }
                      } else {
                        if (validateComponent({ step: activeStep })) {
                          setActiveStep(activeStep + 1);
                        } else {
                          console.log("Error");
                        }
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

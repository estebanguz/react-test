import React, { useState, useEffect } from "react";
import { updateGuestDescription } from "enl-api/reservation";
import moment from "moment";

export const useUpdateGuestDescription = ({ bookingCode, setSnack }) => {
  const [presentation, setPresentation] = useState("");
  const [validity, setValidity] = useState(
    moment()
      .add(1, "years")
      .format("YYYY-MM-DD")
  );
  const [idCheckIn, setIdCheckIn] = useState("IFE MATCH");
  const [cards, setCards] = useState(0);
  const [transportation, setTransportation] = useState(4);
  const [bank1, setBank1] = useState();
  const [bank2, setBank2] = useState();

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (update) {
      updateGuestDescriptionFunction();
    }
  }, [update]);

  const updateGuestDescriptionFunction = async () => {
    const data = {
      presentation,
      validity,
      idCheckIn,
      cards,
      transportation,
      bank1: bank1.value,
      bank2: bank2.value,
    };
    const resp = await updateGuestDescription({ data, bookingCode });

    if (resp) {
      console.log(resp);
      setSnack(true);
    }

    setUpdate(false);
  };

  return [
    presentation,
    validity,
    idCheckIn,
    cards,
    transportation,
    bank1,
    bank2,
    setPresentation,
    setValidity,
    setIdCheckIn,
    setCards,
    setTransportation,
    setBank1,
    setBank2,
    setUpdate,
  ];
};

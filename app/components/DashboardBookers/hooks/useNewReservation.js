import { useState, useEffect } from "react";
import { getUser } from "../../../api/auth/index";
import { nextFolio } from "../../../api/reservation";

import moment from "moment";

export const useNewReservation = () => {
  const [guest, setGuest] = useState("");
  const [separated, setSeparated] = useState("");
  const [mark, setMark] = useState("");
  const [booker, setBooker] = useState("");
  const [registerDate, setRegisterDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [call, setCall] = useState(false);

  const gUser = async () => {
    if (!call) {
      setCall(true);
      const user = await getUser();
      const folio = await nextFolio();
      setBooker(user.data.message);
      setGuest(folio.data.message.folio);
    }
  };

  useEffect(() => {
    gUser();
  });

  const getPropsReservation = () => {
    return {
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
    };
  };

  const getValidateData = () => {
    return {
      guest,
      separated,
      mark,
    };
  };

  return [getPropsReservation, getValidateData];
};

import React, { useState, useEffect } from "react";
import { getOldHotels } from "../../../api/hotels";

export const useRoomDescription = () => {
  const [hotel, setHotel] = useState("");
  const [hotels, setHotels] = useState("");
  const [destination, setDestination] = useState("");
  const [type, setType] = useState("");
  const [nights, setNights] = useState("");
  const [room, setRoom] = useState("");
  const [openDates, setOpenDates] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState();
  const [pax, setPax] = useState("");
  const [presentation, setPresentation] = useState();
  const [validity, setValidity] = useState();
  const [typeId, setTypeId] = useState("");
  const [cardType1, setTypeCard1] = useState("");
  const [bank1, setBank1] = useState("");
  const [cardType2, setTypeCard2] = useState("");
  const [bank2, setBank2] = useState("");
  const [transportation, setTransportation] = useState("");
  const [internalNotes, setInternalNotes] = useState("");
  const [externalNotes, setExternalNotes] = useState("");
  const [quantityCards, setQuantityCards] = useState("");
  const [total, setTotal] = useState("");

  const _getOldHotels = async () => {
    const _h = await getOldHotels();
    const _options = _h.data.message;
    let _final = [];
    _final.push({
      id: 1,
      nombre: "Otro",
    });
    _options.map((_hotel) => {
      _final.push(_hotel);
    });

    setHotels(_final);
  };

  useEffect(() => {
    console.log(hotel);
    if (hotels.length <= 0) {
      _getOldHotels();
    }
  }, [hotel]);

  const getPropsRoom = () => {
    return {
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
    };
  };

  return [getPropsRoom];
};

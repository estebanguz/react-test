import { useState, useEffect } from "react";
import { newReservation } from "../../../api/reservation";

export const useReservation = () => {
  const addReservation = async ({
    getPropsReservation,
    getPropsGuesData,
    getPropsCouple,
    getPropsPaymentMethod,
    getPropsContactData,
    companions,
    getPropsRoom,
    aprox,
    realQty,
  }) => {
    const reservation = await newReservation({
      data: {
        general: {
          no_guest: getPropsReservation().guest,
          separated: getPropsReservation().separated,
          mark: getPropsReservation().mark,
          registerDate: getPropsReservation().registerDate,
        },
        guest_data: {
          name: getPropsGuesData().guestName,
          age: getPropsGuesData().guestAge,
          proffession: getPropsGuesData().guestProffession,
          company: getPropsGuesData().guestCompany,
          position: getPropsGuesData().guestPosition,
          marital_status: getPropsGuesData().guestMartialStatus,
          address: getPropsGuesData().guestAddress,
          city: getPropsGuesData().guestCity,
          state: getPropsGuesData().guestState,
          cp: getPropsGuesData().guestCp,
        },
        couple_data: {
          name: getPropsCouple().coupleName,
          age: getPropsCouple().coupleAge,
          ocupation: getPropsCouple().coupleOcupation,
          company: getPropsCouple().coupleCompany,
          position: getPropsCouple().couplePosition,
        },
        payment_method: {
          card_number: getPropsPaymentMethod().cardNumber,
          name: getPropsPaymentMethod().cardName,
          exp_date: getPropsPaymentMethod().cardExp,
          cvc: getPropsPaymentMethod().cardCvc,
          card_type: getPropsPaymentMethod().cardType,
          bank: getPropsPaymentMethod().cardBank.value,
          concept: getPropsPaymentMethod().cardConcept,
          quantity: getPropsPaymentMethod().quantity,
        },
        contact: {
          phone1: getPropsContactData().phone1,
          phone2: getPropsContactData().phone2,
          email1: getPropsContactData().email1,
          email2: getPropsContactData().email2,
        },
        community_property: {
          aprox_income: aprox,
          real_income: realQty,
        },
        companions: companions,
        room_description: {
          hotel_id: getPropsRoom().hotel.value,
          hotel_name: getPropsRoom().hotel.label,
          destination: getPropsRoom().destination,
          type: getPropsRoom().type,
          nights: getPropsRoom().nights,
          room: getPropsRoom().room,
          open_dates: getPropsRoom().openDates,
          arrival_date: getPropsRoom().arrivalDate,
          departure_date: getPropsRoom().departureDate,
          pax: getPropsRoom().pax,
          validity: getPropsRoom().validity,
          cardType1: getPropsRoom().cardType1,
          bank1: getPropsRoom().bank1.value,
          cardType2: getPropsRoom().cardType2,
          bank2: getPropsRoom().bank2.value,
          transportation: getPropsRoom().transportation,
          internal_notes: getPropsRoom().internalNotes,
          external_notes: getPropsRoom().externalNotes,
          cards: getPropsRoom().quantityCards,
          total: getPropsRoom().total,
        },
      },
    });

    return reservation;
  };

  return [addReservation];
};

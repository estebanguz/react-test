import React, { useState } from "react";

export const usePaymentMethod = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardBank, setCardBank] = useState("");
  const [cardConcept, setCardConcept] = useState("");
  const [quantity, setQuantity] = useState("");

  const getPropsPaymentMethod = () => {
    return {
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
    };
  };

  const getValidationPaymentData = () => {
    return {
      cardNumber,
      cardName,
      cardExp,
      cardCvc,
      cardType,
      cardConcept,
      quantity,
    };
  };

  return [getPropsPaymentMethod, getValidationPaymentData];
};

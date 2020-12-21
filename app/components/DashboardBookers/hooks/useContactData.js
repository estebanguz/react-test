import React, { useState } from "react";

export const useContactData = () => {
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");

  const getPropsContactData = () => {
    return {
      phone1,
      phone2,
      email1,
      email2,
      setPhone1,
      setPhone2,
      setEmail1,
      setEmail2,
    };
  };

  const getValidationContactData = () => {
    return {
      phone1,
      email1,
    };
  };

  return [getPropsContactData, getValidationContactData];
};

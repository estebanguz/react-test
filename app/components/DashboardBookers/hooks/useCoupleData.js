import { useState } from "react";

export const useCoupleData = () => {
  const [coupleName, setCoupleName] = useState("");
  const [coupleAge, setCoupleAge] = useState("");
  const [coupleOcupation, setCoupleOcupation] = useState("");
  const [coupleCompany, setCoupleCompany] = useState("");
  const [couplePosition, setCouplePosition] = useState("");

  const getPropsCouple = () => {
    return {
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
    };
  };

  return [getPropsCouple];
};

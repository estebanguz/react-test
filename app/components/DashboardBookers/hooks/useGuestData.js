import { useState } from "react";
import { useGetDiscovery } from "../hooks/useGetDiscovery"

export const useGuestData = () => {
  const [discovery] = useGetDiscovery()
  const [guestName, setGuestName] = useState("");
  const [guestAge, setGuestAge] = useState("");
  const [guestProffession, setGuestProfession] = useState("");
  const [guestCompany, setGuestCompany] = useState("");
  const [guestPosition, setGuestPosition] = useState("");
  const [guestMartialStatus, setGuestMaritalStatus] = useState(discovery.estado_civil);
  const [guestAddress, setGuestAddress] = useState("");
  const [guestCity, setGuestCity] = useState("");
  const [guestState, setGuestState] = useState("");
  const [guestCp, setGuestCp] = useState("");

  const getPropsGuesData = () => {
    return {
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
    };
  };

  const getValidateGuestData = () => {
    return {
      guestName,
      guestAge,
    };
  };

  return [getPropsGuesData, getValidateGuestData];
};

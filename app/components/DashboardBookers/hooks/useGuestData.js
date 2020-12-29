import { useState ,useEffect} from "react";
import { useGetDiscovery } from "./useGetDiscovery"

export const useGuestData = ({leadId}) => {
  const [discovery] = useGetDiscovery({leadId})
  const [guestName, setGuestName] = useState("");
  const [guestAge, setGuestAge] = useState("");
  const [guestProffession, setGuestProfession] = useState("");
  const [guestCompany, setGuestCompany] = useState("");
  const [guestPosition, setGuestPosition] = useState("");
  const [guestMartialStatus, setGuestMaritalStatus] = useState();
  const [guestAddress, setGuestAddress] = useState("");
  const [guestCity, setGuestCity] = useState("");
  const [guestState, setGuestState] = useState("");
  const [guestCp, setGuestCp] = useState("");

  useEffect(()=>{          
    if(discovery.discovery !== undefined){          
      setGuestMaritalStatus(discovery.discovery.estado_civil)
    }     
  },[discovery])

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

import React, { useState,useEffect } from "react";
import { useGetDiscovery } from "./useGetDiscovery"

export const useContactData = ({ leadId}) => {
  const [discovery] = useGetDiscovery({leadId})
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");

  useEffect(()=>{          
    if(discovery.discovery !== undefined){          
        const _tempIphone = discovery.discovery.telefono;
        setPhone1(_tempIphone.toString())        
    }     
  },[discovery])

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

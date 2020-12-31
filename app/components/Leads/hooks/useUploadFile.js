import React, { useState, useEffect } from "react";
import { createLeadsByFile } from "enl-api/leads";

export const useUploadFile = ({ setOpenSnack, setSnackMessage }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (files.length > 0) {
      uploadFile();
    }
  }, [files]);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("upload", files[0]);

    const resp = await createLeadsByFile(formData);

    if (resp) {
      setFiles([]);
      setSnackMessage("Leads subidos exitosamente");
      setOpenSnack(true);
    }
  };

  return [files, setFiles];
};

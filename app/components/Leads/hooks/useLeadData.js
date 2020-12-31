import React, { useState } from 'react';

export const useLeadData = () => {
  const [data, setForm] = useState({
    nombre: '',
    edad: '',
    telefono: '',
    mensaje: '',
    estado: '',
    ciudad: '',
    municipio: ''
  });
  return [data, setForm];
};

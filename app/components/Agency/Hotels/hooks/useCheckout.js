import React, { useState, useEffect } from 'react';

import Swal from 'sweetalert2';
import { CheckoutSchema } from '../../../../schemas/checkout';
import { createBooking } from '../../../../api/agency/hotels';

export const useCheckOut = () => {
  const [checkOutResponse, setCheckOut] = useState();
  const [name, setName] = useState();
  const [lastName, setlastName] = useState();
  const [mail, setMail] = useState();
  const [phone, setPhone] = useState();
  const [cupon, setCupon] = useState('');
  const [precio_hab, setPrecioHab] = useState();
  const [rk, setRk] = useState();

  useEffect(() => { }, [name, lastName, mail, phone, cupon, rk]);

  const checkOut = ({ nombre_hab }) => {
    Swal.fire({
      customClass: {
        zIndex: '19000'
      },
      title: '¿Estás seguro de ingresar la reserva?',
      text: 'Se le notificará al equipo de ventas y al cliente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, enviar',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          name,
          last_name: lastName,
          mail,
          phone,
          cupon,
          plazo: 'meses_santander',
          nombre_hab,
          precio_hab,
          precio_contado: precio_hab,
          producto: 'hotel',
          rk: [rk]
        };
        const validate = CheckoutSchema.validate(data);

        if (validate.error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal!',
            footer: `${validate.error.message}`
          });
        } else {
          console.log(data);
        }
      }
    });
  };

  return [name, lastName, mail, phone, cupon, precio_hab, setName, setlastName, setMail, setPhone, setCupon, setPrecioHab, setRk, checkOut];
};

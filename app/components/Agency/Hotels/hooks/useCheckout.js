import React, { useState, useEffect } from 'react';

// import Swal from 'sweetalert2';
import { createBooking, saveBookingAgency } from 'site-agency';
import { CheckoutSchema } from '../../../../schemas/checkout';

export const useCheckOut = ({ setOpenBookingModal, setOpenClientModal, setloader }) => {  
  const [name, setName] = useState();
  const [lastName, setlastName] = useState();
  const [mail, setMail] = useState();
  const [phone, setPhone] = useState();
  const [cupon, setCupon] = useState('');
  const [precio_hab, setPrecioHab] = useState();
  const [rk, setRk] = useState();
  const [booking, setBooking] = useState([]);

  useEffect(() => { }, [name, lastName, mail, phone, cupon, rk, booking]);

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
    }).then(async (result) => {
      if (result.isConfirmed) {
        setloader(true);
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
          const _booking = await createBooking(data);
          if (_booking) {
            const _cookie = document.cookie.replace(/(?:(?:^|.*;\s*)agencyUser\s*\=\s*([^;]*).*$)|^.*$/, '$1');
            const agencyCode = JSON.parse(_cookie).user_code;
            const _saveBooking = await saveBookingAgency({
              reserva: _booking.data.message.num_reserva,
              code_comision: agencyCode
            });
            if (_saveBooking) {
              setBooking(_booking.data.message);
              setloader(false);
              setOpenBookingModal(true);
              setOpenClientModal(false);
            }
          }
        }
      }
    });
  };

  return [name, lastName, mail, phone, cupon, precio_hab, booking, setName, setlastName, setMail, setPhone, setCupon, setPrecioHab, setRk, checkOut];
};

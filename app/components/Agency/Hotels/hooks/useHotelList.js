import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getAgencyHotels } from '../../../../api/agency/hotels';

export const useHotelList = () => {
  const _date = moment().format('YYYY-MM-DD');  
  const [destinationType, setDestinationType] = useState(1010);
  const [zoneCode, setZoneCode] = useState(0);
  const [productCode, setProductCode] = useState(4);
  const [arrival, setArrival] = useState(
    moment(_date, 'YYYY-MM-DD').add(4, 'days')
  );
  const [departure, setDeparture] = useState(
    moment(_date, 'YYYY-MM-DD').add(6, 'days')
  );
  const [rooms, setRooms] = useState(1);
  const [pax, setPax] = useState([
    {
      adultos: 2,
      menor: 0,
      edad: {
        menor1: 0,
        menor2: 0,
        menor3: 0,
      },
    },
  ]);
  const [adults, setAdults] = useState(2);
  const [childs, setChilds] = useState(0);
  const [destination, setDestination] = useState('Cancun');
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
		  getHotels();
	  }, [pax]);

	  const getHotels = async () => {
		  setHotelList([]);
    const data = {
		  destination_type: destinationType,
		  zone_code: zoneCode,
		  product_code: productCode,
		  llegada: arrival,
		  salida: departure,
		  room: rooms,
		  pax,
		  adultos: adults,
		  menores: childs,
		  destino: destination,
    };
    if (!sessionStorage.getItem('dataSearch')){      
      sessionStorage.setItem('dataSearch', JSON.stringify(data));
    }   

    const res = await getAgencyHotels(data);

    if (res) {
		  setHotelList(res.data.message);
    }
	  };

  return [
    arrival,
    departure,
    rooms,
    pax,
    hotelList,
    setArrival,
    setDeparture,
    setRooms,
    setPax,
    setDestination,
    setZoneCode
	  ];
};

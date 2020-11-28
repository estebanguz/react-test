import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { SearchComponent } from './searchComponent';
import { useHotelList } from './hooks/useHotelList';
import { getHotelAvailability } from '../../../api/agency/hotels';
import { HotelDescription } from './hotelDescription';

export const HotelDetails = () => {
  const { hotel_name } = useParams();
  const [hotelDetails, setHotelDetails] = useState([]);

  useEffect(() => {
    if (hotelDetails.length <= 0) {
      _getHotel();
    }
  }, [hotelDetails]);

  const _getHotel = async () => {
    const _search = JSON.parse(sessionStorage.getItem('dataSearch'));    

    const _data = {
      url: hotel_name,
      llegada: _search.llegada,
      salida: _search.salida,
      room: _search.room,
      pax: _search.pax
    };

    const _response = await getHotelAvailability(_data);

    if (_response) {
      setHotelDetails(_response.data.message);
    }
  };

  return (
    <>
      <SearchComponent />
      {
			  hotelDetails.length > 0 ? <HotelDescription hotelDetails={hotelDetails} /> : <></>
      }
    </>
  );
};

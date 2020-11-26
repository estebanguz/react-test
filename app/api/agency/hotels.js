import axios from 'axios';
import config from '../config';
import { getJWTAgency } from '../../utils/auth';

export const getAgencyHotels = async (data) => {  
  try {
    const token = await getJWTAgency();    
    return await axios.post(
      `${config.agency.hostnameProduction}/hotels/avialabilitydestination`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Signature: token,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const getDestination = async (data) => {
  const token = await getJWTAgency();
  try {
    return await axios.get(
      `${config.agency.hostnameProduction}/hotels/search/${data}`,
      {
        headers: {
          Signature: token,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const getHotelAvailability = async (data) => {
  const token = await getJWTAgency();
  try {
    return await axios.post(
      `${config.agency.hostnameProduction}/hotels/avialability`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Signature: token,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const createBooking = async (data) => {
  const token = await getJWTAgency();
  try {
    return await axios.post(
      `${config.agency.hostname}/booking/create-booking-hotel`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Signature: token,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};

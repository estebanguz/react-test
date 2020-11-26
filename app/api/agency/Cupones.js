import axios from 'axios';
import config from '../config';
import {getJWTAgency} from '../../utils/auth';

export const ListCupon = async () => {  
  try {    
		const token = await getJWTAgency()

		return await axios.post(`${config.agency.hostname}/users/lista-cupon`,
			{
				usuario : 'victor'
			},
			{
				headers: {			
					"Content-Type": "application/json",				
					'Signature': token
				},
			}
    	)
	} catch (err) {
		console.log(err);
	} 
};

export const CreateCupon = async (data) => {  
	try {    
		  const token = await getJWTAgency()
  
		  return await axios.post(`${config.agency.hostname}/users/cupon-asesor`,
			  {
				tipo_cupon : data.cupon,
				cantidad_descuento : data.descuento,
				vigencia : data.vigencia,
				usuario : data.usuario
			  },
			  {
				headers: {			
					  "Content-Type": "application/json",				
					  'Signature': token
				},
			  }
		  )
	  } catch (err) {
		  console.log(err);		  
		 return {
		 	code: err.response.data.code,
		 	message: err.response.data.message
		 };
	  } 
  };
  
  
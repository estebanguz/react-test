import axios from "axios";
import config from "../config";

export { createBooking, saveBookingAgency } from './hotels'
export { createUserAgency, createUserComision } from './users';

export const getJWT = async () => {
	try {
		const response = await axios.post(
			`${config.agency.hostname}/login`,
			{
				public_key: config.agency.public_key,
				secret_key: config.agency.secret_key,
			},
			{
				headers: {        
					"Content-Type": "application/json",
				},
			}
		);

		return response.data.message.Authorization;
	} catch (err) {
		console.log(err);
	}
};
import axios from "axios";
import config from "../config";
import { getJWT } from "../../utils/auth";

export const newReservation = async ({ data }) => {
	try {
		const token = getJWT();
		return await axios.post(`${config.hostname}/solicitude`, data, {
			headers: {
				Authorization: `Bearer: ${token}`,
			},
		});
	} catch (err) {
		console.log(err.response);
		return {
			status: err.response.data.payload.statusCode,
			message: err.response.data.payload.message,
		};
	}
};

export const nextFolio = async () => {
	try {
		const token = getJWT();
		return await axios.get(`${config.hostname}/clients/nextfolio`, {
			headers: {
				Authorization: `Bearer: ${token}`,
			},
		});
	} catch (err) {
		console.log(err.response);
		return {
			status: err.response.data.payload.statusCode,
			message: err.response.data.payload.message,
		};
	}
};

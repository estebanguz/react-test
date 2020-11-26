import axios from "axios";
import config from "../config";
import { getJWTCrm } from "../../utils/auth";

export const getOldHotels = () => {
	try {
		const token = getJWTCrm();
		return axios.get(`${config.hostname}/hotels`, {
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

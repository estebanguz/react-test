import axios from "axios";
import config from "../config";
import { getJWT } from "../../utils/auth";

export const getOldHotels = () => {
	try {
		const token = getJWT();
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

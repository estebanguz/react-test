import axios from "axios";
import config from "../config";
import { getJWT } from "../../utils/auth";

export const setLeadsByQuantity = async ({ data }) => {
	try {
		const token = getJWT();
		return await axios.post(
			`${config.hostname}/distribution/quantity`,
			{
				broker: data.broker,
				quantity: data.quantity,
			},
			{
				headers: {
					Authorization: `Bearer: ${token}`,
				},
			}
		);
	} catch (err) {
		console.log(err.response);
		return {
			status: err.response.data.payload.statusCode,
			message: err.response.data.payload.message,
		};
	}
};

export const setLeadsByArray = async ({ data }) => {
	try {
		const token = getJWT();
		return await axios.post(
			`${config.hostname}/distribution`,
			{
				broker: data.broker,
				leads: data.leads,
			},
			{
				headers: {
					Authorization: `Bearer: ${token}`,
				},
			}
		);
	} catch (err) {
		console.log(err.response);
		return {
			status: err.response.data.payload.statusCode,
			message: err.response.data.payload.message,
		};
	}
};
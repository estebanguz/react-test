import axios from "axios";
import config from "../config";
import { getJwtAgency } from '../../utils/auth';

export const getJWT = async () => {
	try {
		return await axios.post(
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
	} catch (err) {
		console.log(err);
	}
};
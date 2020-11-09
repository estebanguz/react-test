import axios from "axios";
import config from "../config";
import { getJWTAgency } from "../../utils/auth";

export const getAgencyHotels = async (data) => {
	var token = getJWTAgency();
	try {		
		return await axios.post(
			`${config.agency.hostnameProduction}/hotels/avialabilitydestination`,
			data,
			{
				headers: {
					"Content-Type": "application/json",
					"Signature": token,
				},
			}
		);
	} catch (err) {
		console.log(err);
	}
};

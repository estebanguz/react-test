import axios from "axios";
import config from "../config";
import { getJWTAgency } from '../../utils/auth';

export const loginUserCommision = async (valuesForm) => {
    try {
        const token = await getJWTAgency();
		const response = await axios.post(
			`${config.agency.hostname}/users/login_user_comision`,
			{
                user: valuesForm.get('email'),
                password: valuesForm.get('password'),
            },
			{
				headers: {        
                    "Content-Type": "application/json",
                    Signature: token,
				},
			}
		);

		return response.data.message;
	} catch (err) {
		console.log(err);
	}
}
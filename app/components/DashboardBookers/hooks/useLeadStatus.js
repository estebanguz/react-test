import React, { useState, useEffect } from "react";
import { updateLeadStatus } from "../../../api/leads";

export const useLeadStatus = () => {
	const [leadId, setLeadId] = useState();
	const [statusLead, setStatusLead] = useState();
	const [resp, setResp] = useState([]);
	const [fetch, setFetch] = useState(false);

	const updateStatus = async () => {
		const res = await updateLeadStatus({ leadId, status: statusLead });
		setResp(res);
	};

	useEffect(() => {
		if (fetch) {
			updateStatus();
            setFetch(false);
            setStatusLead('');
		}
	}, [statusLead]);

	return [setLeadId, setStatusLead, setFetch, resp];
};

import React, { useEffect, useState } from "react";

export const useReminder = () => {
	const [date, setDate] = useState();
	const [message, setMessage] = useState();
	const [lead, setLead] = useState();
	const [snackAddReminder, setSnackAddReminder] = useState(false);

	useEffect(() => {
		console.log(`Fecha: ${date}. Message: ${message}. Lead: ${lead}`);
	}, [lead, message, date]);

	const handleReminder = () => {
		//TODO ACTION ADD TO BD
		if (snackAddReminder) {
			setSnackAddReminder(false);
		} else {
			console.log("Agregado a la Base de datos");
			setSnackAddReminder(true);
		}
	};

	return [date, setDate, message, setMessage, lead, setLead, handleReminder];
};

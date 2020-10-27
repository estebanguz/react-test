import React, { useState, useEffect } from "react";

export const useCompanion = () => {
	const [companions, setCompanions] = useState([]);

	const addCompanion = ({ name, age }) => {
		setCompanions(
			companions.concat({
				name: name,
				age: age,
			})
		);

		console.log(companions);
	};

	return [companions, addCompanion];
};

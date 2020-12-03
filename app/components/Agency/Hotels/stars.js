import React, { useEffect, useState } from "react";
import Star from "@material-ui/icons/Star";
import Grid from "@material-ui/core/Grid";

export const StarsCategory = ({ value }) => {
	const _arrayLength = parseInt(value[0]);
    const [stars, setStars] = useState([]);    
    
	useEffect(() => {
		if (stars.length <= 0) {
			let _array = [];
			for (var i = 0; i < _arrayLength; i++) {
				_array.push(1);
			}

			setStars(_array);
		}
	}, [stars]);
	return (
		<Grid container spacing={2}>
			{stars.map((value, index) => {
				return (
					<Grid key={`key12-${index}-${new Date()}`} item>
						<Star fontSize='small' />
					</Grid>
				);
			})}
		</Grid>
	);
};

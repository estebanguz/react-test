import React from "react";
import MUIDataTable from "mui-datatables";
import { StarsCategory } from "./stars";
import Button from '@material-ui/core/Button';

const columns = [
	{
		name: "Hotel",
		options: {
			filter: true,
		},
	},
	{
		name: "Categoria",
		options: {
			filter: true,
			customBodyRender: (value) => <StarsCategory value={value} />,
		},
	},
	{
		name: "Tipo",
		options: {
			filter: true,
		},
	},
	{
		name: "Precio",
		options: {
			filter: true,
			customBodyRender: (value) => {
				const nf = new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "MXN",
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				});

				return nf.format(value);
			},
		},
	},
	{
		name: "Oferta",
		options: {
			filter: true,
		},
	},
	{
		name: "Reservar",
		options: {
			filter: false,
			customBodyRender: (value) => {
				return <Button variant="contained" color="primary">
					Reservar
				</Button>;
			},
		},
	},
];

export const HotelList = ({ hotels }) => {
	const options = {
		filterType: "dropdown",
		responsive: "stacked",
		print: false,
		rowsPerPage: 10,
		page: 0,
		download: false,
		selectableRows: false,
	};

	let _data = [];
	console.log(hotels);
	hotels.map((hotel, index) => {
		_data.push([hotel.name, hotel.category, hotel.type, hotel.minRate, "", ""]);
	});

	return (
		<div>
			<MUIDataTable
				title="Hoteles en Cancun"
				data={_data}
				columns={columns}
				options={options}
			/>
		</div>
	);
};

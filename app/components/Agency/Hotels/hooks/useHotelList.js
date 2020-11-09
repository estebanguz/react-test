import React, { useEffect, useState } from "react";
import { getAgencyHotels } from "../../../../api/agency/hotels";
import moment from 'moment';

export const useHotelList = () => {
	const _date = moment().format('YYYY-MM-DD');	
	const [destinationType, setDestinationType] = useState(1010);
	const [zoneCode, setZoneCode] = useState(0);
	const [productCode, setProductCode] = useState(4);
	const [arrival, setArrival] = useState(moment(_date, 'YYYY-MM-DD').add(4, 'days'));
	const [departure, setDeparture] = useState(moment(_date, 'YYYY-MM-DD').add(6, 'days'));
	const [rooms, setRooms] = useState(1);
	const [pax, setPax] = useState([
		{
			adultos: 2,
			menor: 0,
			edad: {
				menor1: 0,
				menor2: 0,
				menor3: 0,
			},
		},
		{
			adultos: 2,
			menor: 0,
			edad: {
				menor1: 0,
				menor2: 0,
				menor3: 0,
			},
		},
	]);
	const [adults, setAdults] = useState(2);
	const [childs, setChilds] = useState(0);
	const [destination, setDestination] = useState("Cancun");
	const [hotelList, setHotelList] = useState([]);
		

	return [
		destinationType,
		zoneCode,
		productCode,
		arrival,
		departure,
		rooms,
		pax,
		adults,
		childs,
		destination,
		hotelList,
		setDestinationType,
		setZoneCode,
		setProductCode,
		setArrival,
		setDeparture,
		setRooms,
		setPax,
		setAdults,
		setChilds,
		setDestination,
		setHotelList
	];
};

import React, { useEffect, useState } from "react";
import { HotelSearch } from "./hotelSearch";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useHotelList } from "./hooks/useHotelList";
import { getAgencyHotels } from "../../../api/agency/hotels";
import { HotelList } from "./hotelList";

export const HotelsView = () => {
	const [
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
		setHotelList,
	] = useHotelList();

	useEffect(() => {
		if (hotelList.length <= 0) {
			getHotels();
		}
		console.log(hotelList);
	}, [hotelList]);

	const getHotels = async () => {
		const res = await getAgencyHotels({
			destination_type: destinationType,
			zone_code: zoneCode,
			product_code: productCode,
			llegada: arrival,
			salida: departure,
			room: rooms,
			pax: pax,
			adultos: adults,
			menores: childs,
			destino: destination,
		});

		if (res) {
			setHotelList(res.data.message);
		}
	};

	return (
		<div>
			<HotelSearch
				destination={destination}
				arrival={arrival}
				departure={departure}
				rooms={rooms}
				pax={pax}
				setDestination={setDestination}
				setArrival={setArrival}
				setDeparture={setDeparture}
				setRooms={setRooms}
				setAdults={setAdults}
				setChidls={setChilds}
				setPax={setPax}
			/>
			<br />
			{hotelList.length > 0 ? <HotelList hotels={hotelList} /> : <></>}
		</div>
	);
};

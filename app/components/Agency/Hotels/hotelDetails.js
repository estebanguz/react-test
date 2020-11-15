import React from "react";
import { HotelSearch } from "./hotelSearch";
import { useHotelList } from "./hooks/useHotelList";

export const HotelDetails = () => {
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
	return (
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
	);
};

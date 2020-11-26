import React, { useState, useEffect } from 'react';
import { getDestination } from '../../../../api/agency/hotels';

export const useAutocomplete = (({ setDestination }) => {
  const [destinations, setDestinations] = useState([]);
  const [query, setQuery] = useState('Cancún');

  useEffect(() => {
    search();
    setDestination(query);
  }, [query]);

  const search = async () => {
    if (query == '' || query == 'Cancún') {
      setDestinations([]);
    } else {
      const _destinations = await getDestination(query);

      if (_destinations) {
        setDestinations(_destinations.data.message);
      }
    }
  };

  return [query, destinations, setQuery, setDestinations];
});
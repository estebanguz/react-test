import React, { useState, useEffect } from 'react';
import { getDestination } from '../../../../api/agency/hotels';

export const useAutocomplete = (() => {
  const [destinations, setDestinations] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    search();
    console.log(destinations);
  }, [query]);

  const search = async () => {
    if (query == '') {
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

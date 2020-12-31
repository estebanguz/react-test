import React, { useState, useEffect } from "react";
export const useGetAutocomplete = ({ repository }) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(true);
  const [predictions, setPredictions] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    if (query && search) {
      const _time = setTimeout(() => {
        searchFunction();
      }, 500);

      return () => clearTimeout(_time);
    }else {
      setPredictions([]);
    }
  }, [query]);

  const searchFunction = async () => {
    const response = await repository({ query });
    setPredictions(response.data.message.users);
  };

  const getProps = () => {
    return {
      query,
      setQuery,
      setSearch,
      predictions,
      selectedItem,
      setSelectedItem,
      setSearch,
    };
  };

  return [getProps, selectedItem, setSearch];
};

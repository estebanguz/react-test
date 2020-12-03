import React, { useState, useEffect } from "react";
import { searchUser } from "../../../../api/users/index";

export const useSearchUser = () => {
  const [query, setQuery] = useState("");
  const [usersSearch, setUsersSearch] = useState([]);

  useEffect(() => {
    if (query) {
      search();
    } else {
      setUsersSearch([]);
    }
  }, [query]);

  const search = async () => {
    const response = await searchUser({ query });

    if (response) {
      setUsersSearch(response.data.message.users);
    }
  };

  return [query, usersSearch, setQuery];
};

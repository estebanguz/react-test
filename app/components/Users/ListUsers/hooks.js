import { useState, useEffect } from 'react';
import { getAllUsers } from '../../../api/users';

// eslint-disable-next-line import/prefer-default-export
export const getUsersHook = async () => {
  const [users, setUsers] = useState();
  const [page, setPage] = useState();
  const [size, setSize] = useState();

  useEffect(async () => {
    const _users = await getAllUsers({ page, size });
    if (_users) {
      console.log(_users);
      setUsers(_users);
    }
  });

  return [users, page, size, setPage, setSize];
};

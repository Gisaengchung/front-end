import { useState, useEffect } from 'react';
import { getAllUsers } from '../services/fetches/fetches';

export const useUserList = () => {
  const [users, setUsers]  = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getAllUsers()
      .then((users) => {
        setUsers(users);
        setLoading(false);
      });
  }, []);
  
  return {
    users, 
    loading
  };
};

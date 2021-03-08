import { useState, useEffect } from 'react';
import { getUserById } from '../services/fetches/fetches';

export const useUserDetail = id => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getUserById(id)
      .then((user) => {
        setUser(user);
        setLoading(false);
      });

  }, [id]);
  
  return {
    user,
    loading
  };
};

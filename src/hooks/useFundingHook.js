import { useState, useEffect } from 'react';
import { getDonationsById } from '../services/fetches/fetches';

export const useFundingHook = id => {
  const [donation, setDonation] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getDonationsById(id)
      .then((donation) => {
        setDonation(donation);
        setLoading(false);
      });

  }, [id]);
  
  return {
    donation,
    loading
  };
};

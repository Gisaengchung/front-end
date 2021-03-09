/* eslint-disable max-len */
import React from 'react';
import LoadingSpinner from '../../loading/LoadingSpinner';
import FundingFormPresentational from './FundingFormPresentational';
import { useFundingHook } from '../../hooks/useFundingHook';
import { useParams } from 'react-router';


const FundingForm = ({ history }) => {
  const { id } = useParams();
  const { donation, loading } = useFundingHook(id);

  if(loading) return <LoadingSpinner />;
  return (
    <>
      <FundingFormPresentational donation = { donation } />
    </>
  );
};

FundingForm.propTypes = {
};

export default FundingForm;

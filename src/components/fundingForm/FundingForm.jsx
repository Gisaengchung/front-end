/* eslint-disable no-unused-vars */
import React from 'react';
import LoadingSpinner from '../../loading/LoadingSpinner';
import FundingFormPresentational from './FundingFormPresentational';
import { useFundingHook } from '../../hooks/useFundingHook';
import { useParams } from 'react-router';

const FundingForm = ({ history }) => {
  const { id } = useParams();
  const { donation, loading } = useFundingHook(id);

  const formatDate = (date) => {
    const day = donation.projectFundingExDate.substring(8, 10);
    const month = donation.projectFundingExDate.substring(5, 7);
    const year = donation.projectFundingExDate.substring(0, 4);
    return `${month}/${day}/${year}`;
  };
  

  if(loading) return <LoadingSpinner />;
  if(!loading){
    donation.projectFundingExDate = formatDate(donation.projectFundingExDate);
  }
  console.log(donation);

  return (
    <div>
      <FundingFormPresentational donation = { donation } />
    </div>
  );
};

FundingForm.propTypes = {
};

export default FundingForm;

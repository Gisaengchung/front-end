/* eslint-disable no-unused-vars */
import React from 'react';
import LoadingSpinner from '../../loading/LoadingSpinner';
import FundingFormPresentational from './FundingFormPresentational';
import PropTypes from 'prop-types';
import { useFundingHook } from '../../hooks/useFundingHook';
import { useParams } from 'react-router';

const FundingForm = ({ history }) => {
  const { id } = useParams();
  const { donation, loading } = useFundingHook(id);
  
  if(loading) return <LoadingSpinner />;

  return (
    <div>
      <FundingFormPresentational donation = { donation } />
    </div>
  );
};

FundingForm.propTypes = {
  history: PropTypes.object
};

export default FundingForm;

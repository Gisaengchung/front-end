/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { patchDonationData } from '../../services/fetches/fetches';
import styles from '../../styles/form.css';
import FormInput from '../formInput/FormInput';

const FundingFormPresentational = ({ donation }) => { 

  const history = useHistory();
  const projectId = donation.projectId;
  const projectFundingGoal = donation.projectFundingGoal;
  const projectFundingExDate = donation.projectFundingExDate;
  const [projectDonations, setProjectDonations] = useState(donation.projectDonations);
  const [increment, setIncrement] = useState(10);

  const handleSubmitDonation = event => {
    event.preventDefault();

    patchDonationData({       
      projectId,
      projectFundingGoal,
      projectFundingExDate,
      increment
    })
      .then(() => { 
        window.location.reload(false);      }); 
  };
      
  return (
    <div className={styles.displayPage}>
      <form className={styles.formContainer} onSubmit={handleSubmitDonation}>
        <h2 className={styles.formHeader}>Donate</h2>
        <div>Funding Goal: ${projectFundingGoal}</div> 
        <div>Total Donations: ${projectDonations}</div>
        <div>Funding Expiration Date: {projectFundingExDate}</div>
        <FormInput 
          id={'increment'}
          type={'number'}
          value={increment}
          placeholder={'Donation Amount'}
          onChangeFn={setIncrement}
        />
        <button>Fund!</button>
      </form>
    </div>
  );
};

FundingFormPresentational.propTypes = {
  donation: PropTypes.object.isRequired
};
export default FundingFormPresentational;

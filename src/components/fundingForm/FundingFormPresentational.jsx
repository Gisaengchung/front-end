/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { patchDonationData } from '../../services/fetches/fetches';
import styles from '../../styles/form.css';
import FormInput from '../formInput/FormInput';
import NumberFormat from 'react-number-format';

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
        window.location.reload(false);
      }); 
  };
      
  return (
    <div className={styles.displayPage}>
      <form 
        className={`${styles.formContainer} ${styles.fundingForm}`} 
        onSubmit={handleSubmitDonation}>
        <h2 className={styles.formHeader}>Donate</h2>
        <div className={styles.fundDetails}>Funding Goal:
          <br></br>
          <NumberFormat
            className={styles.fundNum}
            value={projectFundingGoal}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'} 
          />
        </div> 
        <div className={styles.fundDetails}>Total Donations:
          <br></br>
          <NumberFormat
            className={styles.fundNum}
            value={projectDonations}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
        </div>
        <div className={styles.fundDetails}>Funding Expiration Date:
          <br></br><b>{projectFundingExDate}</b> </div>
        <br></br>
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

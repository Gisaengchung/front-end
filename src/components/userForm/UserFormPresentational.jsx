/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { patchUserData } from '../../services/fetches/fetches';
import styles from '../../styles/form.css';
import { useAuthError, useSession } from '../../state/AuthUserProvider';
import { useHistory } from 'react-router-dom';
import UpLoader from '../cloudinary/UpLoader';
import FormInput from '../formInput/FormInput';

const UserFormPresentational = ({ user }) => {
  const history = useHistory();

  const error = useAuthError();
  const { session, setSession }  = useSession() || {};
  const [email, setEmail] = useState(user.email);
  const [firstName, setFName] = useState(user.firstName);
  const [lastName, setLName] = useState(user.lastName);
  const [userCity, setCity] = useState(user.userCity);
  const [userState, setUserState] = useState(user.userState);
  const [tagline, setTagline] = useState(user.tagline);
  const [userRole, setUserRole] = useState(user.userRole);
  const [profileImageUrl, setProfileImageUrl] = useState(user.profileImageUrl || '');
  const [paymentHandle, setPaymentHandle] = useState(user.paymentHandle);

  const handleSubmit = event => {
    event.preventDefault();
    patchUserData({ 
      userId:session.userId, 
      email, 
      tagline, 
      userRole, 
      paymentHandle, 
      firstName, 
      lastName, 
      userState, 
      userCity, 
      profileImageUrl
    })
      .then((user) => { 
        setSession(user);
        history.push(`/user-detail/${user.userId}`);}); 
  };
  
  return (
    <div className={styles.displayPage}>
      {error && <p>{error.message}</p>}
      <form className={styles.formContainer} onSubmit={handleSubmit}>   
        <h2 className={styles.formHeader}>Edit Your Profile</h2>
        <FormInput 
          id={'email'}
          type={'email'}
          value={email}
          placeholder={'Email'}
          onChangeFn={setEmail}
        />        
        <FormInput 
          id={'firstName'}
          type={'text'}
          value={firstName}
          placeholder={'First Name'}
          onChangeFn={setFName}
        />
        <FormInput 
          id={'lastName'}
          type={'text'}
          value={lastName}
          placeholder={'Last Name'}
          onChangeFn={setLName}
        />
        <FormInput 
          id={'tagline'}
          type={'text'}
          maxLength={'150'}
          value={tagline}
          placeholder={'Tagline'}
          onChangeFn={setTagline}
        />
        <FormInput 
          id={'userRole'}
          type={'text'}
          maxLength={'50'}
          value={userRole}
          placeholder={'Role'}
          onChangeFn={setUserRole}
        />
        <FormInput 
          id={'paymentHandle'}
          type={'text'}
          maxLength={'30'}
          value={paymentHandle}
          placeholder={'Venmo Handle'}
          onChangeFn={setPaymentHandle}
        />
        <FormInput 
          id={'cityInput'}
          type={'text'}
          value={userCity}
          maxLength={'40'}
          placeholder={'City'}
          onChangeFn={setCity}
        />    
        <FormInput 
          id={'stateInput'}
          type={'text'}
          value={userState}
          maxLength={'40'}
          placeholder={'State'}
          onChangeFn={setUserState}
        />      
        <UpLoader setProfileImageUrl={setProfileImageUrl} profileImageUrl={profileImageUrl} />
        <button>Submit</button>
      </form>
    </div>
  );
};

UserFormPresentational.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserFormPresentational;


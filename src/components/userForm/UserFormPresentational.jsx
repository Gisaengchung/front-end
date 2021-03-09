/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { patchUserData } from '../../services/fetches/fetches';
import styles from '../../styles/form.css';
import { useAuthError, useSession } from '../../state/AuthUserProvider';
import { useHistory } from 'react-router-dom';
import UpLoader from '../cloudinary/UpLoader';

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
        <div className={styles.field}>         
          <input
            id="email"
            className={styles.floatingInput}
            type="email"
            value={email}
            placeholder="Email"
            onChange={({ target }) => setEmail(target.value)}
            required />
          <label 
            className={styles.floatingLabel} data-content="Email"
            htmlFor="email">
            <span className={styles.hiddenVisually}>Email</span>
          </label>
        </div>         
        <div className={styles.field}>
          <input
            id="firstName"
            className={styles.floatingInput}
            type="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={({ target }) => setFName(target.value)} 
            required />
          <label
            className={styles.floatingLabel} data-content="First Name"
            htmlFor="firstName">
            <span className={styles.hiddenVisually}>First Name</span>
          </label>        
        </div>
        <div className={styles.field}>
          <input
            id="lastName"
            className={styles.floatingInput}
            type="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={({ target }) => setLName(target.value)} 
            required />
          <label
            className={styles.floatingLabel} data-content="Last Name"
            htmlFor="lastName">
            <span className={styles.hiddenVisually}>Last Name</span>
          </label>        
        </div>
        <div className={styles.field}>
          <input
            id="tagline"
            className={styles.floatingInput}
            type="text"
            value={tagline}
            placeholder="Tagline"
            onChange={({ target }) => setTagline(target.value)} />
          <label
            className={styles.floatingLabel} data-content="Tagline"
            htmlFor="tagline">
            <span className={styles.hiddenVisually}>Tagline</span>
          </label>
        </div>
        <div className={styles.field}>
          <input
            id="userRole"
            className={styles.floatingInput}
            type="text"
            value={userRole}
            placeholder="Role"
            onChange={({ target }) => setUserRole(target.value)} />
          <label
            className={styles.floatingLabel} data-content="Role"
            htmlFor="userRole">
            <span className={styles.hiddenVisually}>Role</span>
          </label>
        </div>
        <div className={styles.field}>
          <input
            id="paymentHandle"
            className={styles.floatingInput}
            type="text"
            value={paymentHandle}
            placeholder="Venmo Handle"
            onChange={({ target }) => setPaymentHandle(target.value)} />
          <label
            className={styles.floatingLabel} data-content="Venmo Handle"
            htmlFor="paymentHandle">
            <span className={styles.hiddenVisually}>Venmo Handle</span>
          </label>
        </div>
        <div className={styles.field}>
          <input
            id="cityInput"
            type="text"
            className={styles.floatingInput}
            maxLength="50"
            placeholder="City"
            onChange={({ target }) => setCity(target.value)}
            value={userCity} 
            required/>
          <label
            className={styles.floatingLabel} data-content="City"
            htmlFor="cityInput">
            <span className={styles.hiddenVisually}>City</span>
          </label>  
        </div>      
        <div className={styles.field}>
          <input
            id="stateInput"
            className={styles.floatingInput}
            state="userState"
            placeholder="State"
            maxLength="30"
            onChange={({ target }) => setUserState(target.value)}
            value={userState} 
            required/>     
          <label
            className={styles.floatingLabel} data-content="State"
            htmlFor="stateInput">
            <span className={styles.hiddenVisually}>State</span>
          </label> 
        </div>          
        <div>
          <UpLoader setProfileImageUrl={setProfileImageUrl} profileImageUrl={profileImageUrl} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

UserFormPresentational.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserFormPresentational;


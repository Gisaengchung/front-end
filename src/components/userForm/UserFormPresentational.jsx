import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { patchUserData } from '../../services/fetches/fetches';
import styles from './UserForm.css';
import { useAuthError, useSession } from '../../state/AuthUserProvider';
import { useHistory } from 'react-router-dom';


const UserFormPresentational = ({ user }) => {
  console.log(user, 'test');
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
  const [profileImageUrl, setProfileImageUrl] = useState(user.profileImageUrl);
  const [paymentHandle, setPaymentHandle] = useState(user.paymentHandle);



  const handleSubmit = event => {
    event.preventDefault();
    patchUserData({ userId:session.userId, email, tagline, userRole, paymentHandle, firstName, lastName, userState, userCity, profileImageUrl })
      .then((user) => { 
        setSession(user);
        history.push(`/user-detail/${user.userId}`);}); 
  };
  
  return (
    <>
      <h2>Edit Your Profile</h2>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit}>   
        <div className = {styles.formContainer}>         
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={({ target }) => setEmail(target.value)} 
            required/>

          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={({ target }) => setFName(target.value)} 
            required/>

          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={({ target }) => setLName(target.value)} 
            required/>

          <input
            type="text"
            value={tagline}
            placeholder="Tagline"
            onChange={({ target }) => setTagline(target.value)} />

          <input
            type="text"
            value={userRole}
            placeholder="Role"
            onChange={({ target }) => setUserRole(target.value)} />

          <input
            type="text"
            value={paymentHandle}
            placeholder="Venmo Handle"
            onChange={({ target }) => setPaymentHandle(target.value)} />

          <input
            type="text"
            className="cityInput"
            maxLength="50"
            placeholder="City"
            onChange={({ target }) => setCity(target.value)}
            value={userCity} 
            required/>

          <input
            type="text"
            className="userState"
            placeholder="State"
            maxLength="30"
            onChange={({ target }) => setUserState(target.value)}
            value={userState} 
            required/>

          <input
            type="text"
            className="profileImage"
            placeholder="Profile Image URL"
            onChange={({ target }) => setProfileImageUrl(target.value)}
            value={profileImageUrl} 
            required/>      

          <button>Submit</button>
        </div> 
      </form>

    </>
  );
};

UserFormPresentational.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserFormPresentational;


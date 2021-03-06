/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuthError } from '../../state/AuthUserProvider';
import { useSession } from '../../state/AuthUserProvider';
import { patchUserData } from '../../services/fetches/fetches';


const AuthForm = ({ history }) => {
  const { session, setSession }  = useSession() || {};

  const error = useAuthError();
  const [email, setEmail] = useState(session.email || '');
  const [firstName, setFName] = useState(session.firstName || '');
  const [lastName, setLName] = useState(session.lastName || '');                                      
  const [userCity, setCity] = useState(session.userCity || '');
  const [userState, setUserState] = useState(session.userState || '');
  const [userTagLine, setUserTagLine] = useState(session.userTagLine || '');
  const [userRole, setUserRole] = useState(session.userRole || '');
  const [userPaymentHandle, setUserPaymentHandle] = useState(session.userPaymentHandle || '');

  

  const handleSubmit = event => {
    event.preventDefault();
    patchUserData({ userId:session.userId, email, userTagLine, userRole, userPaymentHandle, firstName, lastName, userState, userCity })
      .then((user) => { 
        setSession(user);
        history.push('/user-detail');}); 
  };


  return (
    <>
      <h2>Edit Your Profile</h2>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit}>              
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={({ target }) => setEmail(target.value)} />

        <input
          type="text"
          value={firstName}
          placeholder="firstName"
          onChange={({ target }) => setFName(target.value)} />

        <input
          type="text"
          value={lastName}
          placeholder="lastName"
          onChange={({ target }) => setLName(target.value)} />

        <input
          type="text"
          value={userTagLine}
          placeholder="Tag Line"
          onChange={({ target }) => setUserTagLine(target.value)} />

        <input
          type="text"
          value={userRole}
          placeholder="role"
          onChange={({ target }) => setUserRole(target.value)} />

        <input
          type="text"
          value={userPaymentHandle}
          placeholder="paymentHandle"
          onChange={({ target }) => setUserPaymentHandle(target.value)} />

        <input
          type="text"
          className="cityInput"
          city="userCity"
          maxLength="30"
          placeholder="cityInput"
          onChange={({ target }) => setCity(target.value)}
          value={userCity} />

        <input
          type="text"
          className="userState"
          city="userState"
          placeholder="userState"
          maxLength="30"
          onChange={({ target }) => setUserState(target.value)}
          value={userState} />     

        <button>Submit</button>
      </form>
    </>
  );
};

AuthForm.propTypes = {
};

export default AuthForm;

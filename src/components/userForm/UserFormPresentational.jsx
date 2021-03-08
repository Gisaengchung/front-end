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
  const [userTagLine, setUserTagLine] = useState(user.userTagLine);
  const [userRole, setUserRole] = useState(user.userRole);
  const [userPaymentHandle, setUserPaymentHandle] = useState(user.userPaymentHandle);


  const handleSubmit = event => {
    event.preventDefault();
    patchUserData({ userId:session.userId, email, userTagLine, userRole, userPaymentHandle, firstName, lastName, userState, userCity })
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
        </div> 
      </form>

    </>
  );
};

UserFormPresentational.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserFormPresentational;


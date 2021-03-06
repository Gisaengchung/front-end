/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';

function UserDetail({ email, firstName, lastName, userCity, userState, userTagLine, userRole, userPaymentHandle }) {
  return (
    <>
      <figure>
        <div>{email}</div>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{userCity}</div>
        <div>{userState}</div>
        <div>{userTagLine}</div>
        <div>{userRole}</div>
        <div>{userPaymentHandle}</div>
        <div>USER IMAGE</div>
      </figure>    
      {/* Need Some Sort of conditional rendering for if userId matches session userId then render button to edit profile. This page also renders to the map so need to make sure doesnt render in all profiles. 

      <div>
        <button>
          <NavLink className="link" to="/user-form">
            Edit your Profile
          </NavLink>
        </button>
      </div> */}
    </>
  );
}
UserDetail.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userState: PropTypes.string,
  userCity: PropTypes.string,
  userRole: PropTypes.string,
  userTagLine: PropTypes.string,
  userPaymentHandle: PropTypes.string,
};
export default UserDetail;

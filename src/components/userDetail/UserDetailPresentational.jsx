import React from 'react';
import PropTypes from 'prop-types';

const UserListPresentation = ({ user }) => {
  
  return (
    <>
      <img src={user.profileImageUrl} />
      <div>{ user.email }</div>
      <div>{ user.firstName }</div>
      <div>{ user.lastName }</div>
      <div>{ user.paymentHandle }</div>
      <div>{ user.userRole }</div>
      <div>{ user.userCity }</div>
      <div>{ user.userState }</div>
      <div>{ user.tagline }</div>

    </>
  );
};

UserListPresentation.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListPresentation;

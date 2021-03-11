import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserDetail.css'

const UserListPresentation = ({ user }) => {
  return (
    <div className={styles.userDetailPod}>
    <div className={styles.userDetailPresentational}>
      <img className={styles.userImageDetails} src={user.profileImageUrl} />
      <h2 className={styles.h2User}>{ user.firstName } { user.lastName }</h2>
      <h3>{ user.userCity }, { user.userState }</h3>
      <div>{ user.tagline }</div>
      <div>{ user.userRole }</div>
      <div>{ user.email }</div>
      <div>{ user.paymentHandle }</div>
    </div>
    </div>
  );
};

UserListPresentation.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListPresentation;


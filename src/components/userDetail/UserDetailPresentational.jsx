import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserDetail.css';

const UserListPresentation = ({ user }) => {
  return (
    <div className={styles.userDetailPod}>
    <div className={styles.userDetailPresentational}>
      <h2 className={styles.h2User}>{user.firstName} { user.lastName }</h2>
      <img className={styles.userImageDetail} src={user.profileImageUrl} />
      <h5>{user.userCity}, {user.userState}</h5>
      <div className={styles.userDetail}>{user.tagline}</div>
      <div className={styles.userDetail}>{user.userRole}</div>
      <div className={styles.userDetail}>{user.email}</div>
      <div className={styles.userDetail}>{user.paymentHandle}</div>
    </div>
    </div>
  );
};

UserListPresentation.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListPresentation;


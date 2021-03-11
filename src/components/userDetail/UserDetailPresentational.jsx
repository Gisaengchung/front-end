import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserDetail.css';
import { Link } from 'react-router-dom';

const UserListPresentation = ({ user }) => {
  return (
    <Link 
      to={`/user-detail/${user.userId}`}  
      className={styles.userDetailPresentational}>
      <h2 className={styles.h2User}>{user.firstName} { user.lastName }</h2>
      <img className={styles.userImageDetail} src={user.profileImageUrl} />
      <h5>{user.userCity}, {user.userState}</h5>
      <div className={styles.userDetail}>{user.tagline}</div>
      <div className={styles.userDetail}>{user.userRole}</div>
      <div className={styles.userDetail}>{user.email}</div>
      <div className={styles.userDetail}>{user.paymentHandle}</div>
    </Link>
  );
};

UserListPresentation.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListPresentation;



import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserDetail.css';

const UserListPresentation = ({ user }) => {
  return (
    <div className={styles.userDetailPod}>
    <div className={styles.userDetailPresentational}>
<<<<<<< HEAD
      <img className={styles.userImageDetails} src={user.profileImageUrl} />
      <h2 className={styles.h2User}>{ user.firstName } { user.lastName }</h2>
      <h3>{ user.userCity }, { user.userState }</h3>
      <div>{ user.tagline }</div>
      <div>{ user.userRole }</div>
      <div>{ user.email }</div>
      <div>{ user.paymentHandle }</div>
=======
      <h2 className={styles.h2User}>{user.firstName} { user.lastName }</h2>
      <img className={styles.userImageDetail} src={user.profileImageUrl} />
      <h5>{user.userCity}, {user.userState}</h5>
      <div className={styles.userDetail}>{user.tagline}</div>
      <div className={styles.userDetail}>{user.userRole}</div>
      <div className={styles.userDetail}>{user.email}</div>
      <div className={styles.userDetail}>{user.paymentHandle}</div>
>>>>>>> 76019cb1caabd3caef4e3e48c836acfce707d9a9
    </div>
    </div>
  );
};

UserListPresentation.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListPresentation;


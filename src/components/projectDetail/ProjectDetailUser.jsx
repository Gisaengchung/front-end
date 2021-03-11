import React from 'react';
import PropTypes from 'prop-types';
import styles from './Project.css';
import appicon from '../userDetail/userAssests/appicon.png';

const ProjectDetailUser = ({ user }) => {
  return (
    <div className={styles.projectDetailPresentational}>
      <h2 className={styles.userTitle}>{user.firstName} { user.lastName }</h2>
      <img className={styles.projectUserImage} src={user.profileImageUrl} />
      <h5 className={styles.userLocation}>{user.userCity}, {user.userState}</h5>
      <div className={styles.userProDetail}>{user.tagline}</div>
      <div className={styles.userProDetail}>{user.userRole}</div>
      <div className={styles.userProDetail}>{user.email}</div>
      <div className={styles.userProDetail}>
        <img className={styles.userVenmo} src={appicon} /> {user.paymentHandle}
      </div>
    </div>
  );
};

ProjectDetailUser.propTypes = {
  user: PropTypes.object.isRequired
};

export default ProjectDetailUser;

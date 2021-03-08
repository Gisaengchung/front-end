import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './UsersListPresentational.css';

const UserListPresentation = ({ users }) => {
  const userElements = users.map(user => (
    <li key={user.userId}>
      <Link to={`/user-detail/${user.userId}`}>
        <div className={`${styles.row} ${styles.userListContainer}`} >
          <img className = {styles.listImage} src={user.profileImageUrl} />
          <div className = {styles.column}>
            <div>{`${user.firstName} ${user.lastName}`}</div> 
            <div>{`${user.userCity} ${user.userState}`}</div> 
          </div>
        </div>
      </Link>
    </li>
  ));

  return (
    <ul>
      {userElements}
    </ul>
  );
};

UserListPresentation.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }))
};

export default UserListPresentation;


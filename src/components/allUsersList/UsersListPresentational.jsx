import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UsersListPresentational.css';

const UsersListPresentational = ({ users }) => {
  const userElements = users.map(user => (
    <li key={user.userId}>
      <Link to={`/user-detail/${user.userId}`} className={styles.userNameStuff}>
        <div className={`${styles.userListContainer}`} >
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
    <ul className={styles.userStuff}>
      {userElements}
    </ul>
  );
};


export default UsersListPresentational;

 

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import User from '../userDetail/UserDetail';

const UserListPresentation = ({ users }) => {
  console.log(users);
  const userElements = users.map(user => (
    <li key={user.name}>
      <Link to={`/user/${user.userId}`}>
        <User {...user} /> 
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


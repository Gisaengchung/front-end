import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectListPagePresentational = ({ users }) => {
  const userElements = users.map(user => (
    <li key={user.userId}>
      <Link to={`/user-detail/${user.userId}`}>
        <div>{user.userId}</div> 
        <div>{user.firstName}</div> 
      </Link>
    </li>
  ));

  return (
    <ul>
      {userElements}
    </ul>
  );
};

ProjectListPagePresentational.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }))
};

export default ProjectListPagePresentational;

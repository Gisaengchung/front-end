import React from 'react';
import { getAllUsers } from '../../services/fetches/fetches';
import { useSelector } from '../../state/AuthUserProvider';
import UserDetail from '../userDetail/UserDetail';

const UsersList = () => {
  console.log(users);
  const users = useSelector(getAllUsers);

  const userElements = users.map(user => (
    <li key={user.name}>
      <UserDetail {...user} />
    </li>
  ));

  return (
    <ul>
      {userElements}
    </ul>
  );
};

export default UsersList;

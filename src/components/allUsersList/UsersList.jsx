import React from 'react';
import UserListPresentational from '../allUsersList/UsersListPresentational';
import { useUserList } from '../../hooks/userListHook';
import LoadingSpinner from '../../loading/LoadingSpinner';

export default function UserList() {
  const { loading, users } = useUserList();

  if(loading) return <LoadingSpinner />;
  return <UserListPresentational users={users} />;
}

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSession } from '../../state/AuthUserProvider';
import { useUserDetail } from '../../hooks/userHook';
import UserFormPresentational from './UserFormPresentational';
import LoadingSpinner from '../../loading/LoadingSpinner';


const AuthForm = ({ history }) => {
  const { session }  = useSession() || {};
  const id = session.userId;
  const { user, loading } = useUserDetail(id);

  if(loading) return <LoadingSpinner />;
  return (
    <>
      <UserFormPresentational user = { user } />
    </>
  );
};

AuthForm.propTypes = {
};

export default AuthForm;

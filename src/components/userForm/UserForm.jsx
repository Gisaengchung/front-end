/* eslint-disable max-len */
import React, { useState } from 'react';
import { useAuthError } from '../../state/AuthUserProvider';
import { useSession } from '../../state/AuthUserProvider';
import { useUserDetail } from '../../hooks/userHook';
import UserFormPresentational from './UserFormPresentational';


const AuthForm = ({ history }) => {
  const { session }  = useSession() || {};
  const id = session.userId;
  const { user } = useUserDetail(id);

  return (
    <>
      <UserFormPresentational user = { user } />
    </>
  );
};

AuthForm.propTypes = {
};

export default AuthForm;

/* eslint-disable react/prop-types */
import React from 'react';
import UserDetailPresentational from './UserDetailPresentational';
import LoadingSpinner from '../../loading/LoadingSpinner';
import { useUserDetail } from '../../hooks/userHook';
import { useParams } from 'react-router';
import { useSession } from '../../state/AuthUserProvider';
import styles from './UserDetail.css';

export default function UserDetail({ history }) {
  const { id } = useParams();
  const { session } = useSession() || {};
  const { loading, user } = useUserDetail(id);
 
  const handleClick = () => {
    history.push('/user-form');
  };

  let profileButton = '';

  try {
    profileButton = 
    (id === session.userId) ? 
      <button 
        className={styles.editUserButton} 
        onClick={handleClick}>Edit Profile
      </button> 
      : 
      <div></div>;
  }
  catch{
    profileButton = '';
  }
  if(loading) return <LoadingSpinner />;
  return (
    <>
      <UserDetailPresentational user={user} />
      <div>{profileButton}</div>
    </>
  
  );
}

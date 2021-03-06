
import React from 'react'; 
import { useSession } from '../../state/AuthUserProvider';
import { NavLink } from 'react-router-dom';

export default function UserDetail() {

  const { session } = useSession() || {};

  return (
    <>
      <div> Hello
        <div>{session.email}</div>
        <div>{session.firstName}</div>
        <div>{session.lastName}</div>
        <div>{session.userCity}</div>
        <div>{session.userState}</div>
        <div>{session.userTagLine}</div>
        <div>{session.userRole}</div>
        <div>{session.userPaymentHandle}</div>
        <div>USER IMAGE</div>
      </div>

      <div>
        <button>
          <NavLink className="link" to="/user-form">
            Edit your Profile
          </NavLink>
        </button>
      </div>
    </>
  );
}

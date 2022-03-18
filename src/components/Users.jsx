import React, { useState } from 'react';
import UserSearch from './UserSearch';
import './Users.css';
import { Posts } from './Posts';

export function Users() {
  return (
    <div className='app__user app__wrapper section__padding'>
      <div className='app__wrapper_user'>
        <UserSearch />
      </div>
    </div>
  );
}

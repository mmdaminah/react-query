import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Posts } from './Posts';

import './UserSearch.css';

async function searchUsers(name) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return response.json();
}

export default function UserSearch(user) {
  const [query, setQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const { data, isError, error, isLoading } = useQuery(
    ['name', user.name],
    () => searchUsers(user.name)
  );
  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <>
      <div>
        <input
          placeholder='Search user'
          onChange={(event) => setQuery(event.target.value)}
        />
        {data
          .filter((user) => {
            if (query === '') {
              return user;
            } else if (user.name.toLowerCase().includes(query.toLowerCase())) {
              return user;
            }
          })
          .map((user, id) => (
            <div key={user.name}>
              <p
                className='user-name'
                key={id}
                onClick={() => setSelectedUser(user)}
              >
                {user.name}
              </p>
            </div>
          ))}
      </div>
      <div className='app__wrapper_post'>
        {selectedUser && <Posts user={selectedUser} />}
      </div>
    </>
  );
}

import React from 'react';
import { useQuery } from 'react-query';

import FindPosts from './FindPosts';

async function fetchPosts(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return response.json();
}

export function Posts({ user }) {
  const { data, isError, error, isLoading } = useQuery(['posts', user.id], () =>
    fetchPosts(user.id)
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
      <div>{console.log(data)}
        <FindPosts data={data} />
      </div>
      <div>
        {/* {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))} */}
      </div>
    </>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';

function Movies() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Movies route</h1>
      <h2>{`Welcome ${user}`}</h2>
    </div>
  );
}

export default Movies;

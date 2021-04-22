import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Creators } from '../../store/ducks/user';

function Login() {
  const [username, setUsername] = useState('');
  const [validUser, setValidUser] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length < 2) return setValidUser(!validUser);

    dispatch(Creators.newUser(username));
    setUsername('');

    return history.push('/movies');
  };

  return (
    <>
      { validUser && <h2>Invalid username</h2>}
      <form>
        <label htmlFor="username-input">
          Username
          <input type="text" id="username-input" onChange={(e) => setUsername(e.target.value)} value={username} />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </>
  );
}

export default Login;

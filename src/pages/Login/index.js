import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

function Login() {
  const [username, setUsername] = useState('');
  // const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername('');
    history.push('/movies');
  };
  return (
    <form>
      <label htmlFor="username-input">
        Username
        <input type="text" id="username-input" onChange={(e) => setUsername(e.target.value)} value={username} />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Enviar
      </button>
    </form>
  );
}

export default Login;

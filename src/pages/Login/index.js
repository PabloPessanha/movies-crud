import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Creators } from '../../store/ducks/user';
import style from './styles.module.scss';

function Login() {
  const [username, setUsername] = useState('');
  const [validUser, setValidUser] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length < 5) return setValidUser(true);

    dispatch(Creators.newUser(username));
    setUsername('');

    return history.push('/movies');
  };

  return (
    <>
      <h1 className={style.title}>Login</h1>
      <div className={style.container}>
        <form>
          <label htmlFor="username-input" className={style.inputContainer}>
            <h2>Username</h2>
            <input type="text" id="username-input" onChange={(e) => setUsername(e.target.value)} value={username} />
          </label>
          { validUser && <h4 className={style.error}>Need at least 5 characters!</h4>}
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;

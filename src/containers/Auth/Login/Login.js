import React, { useState } from 'react';

export default function Login({logIn}) {

  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");

  const submit = e => {
    e.preventDefault();

    let logInData = {
      email,
      password
    };
    logIn(logInData);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <h2>Log In</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input type="submit" value="Log in" />
        {this.props.loginError && <p>Login error</p>}
      </form>
    </div>
  );
}




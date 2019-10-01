import React, { useState } from 'react';

export default function Register({register}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submit = event => {
    event.preventDefault();

    let registerData = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name
    };
    register(registerData);
  };

    return (
      <div>
        <form onSubmit={submit}>
          <h2>Register</h2>
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
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input type="submit" value="Register" />
          {this.props.registerError && <p>registerError</p>}
        </form>
      </div>
    );
}


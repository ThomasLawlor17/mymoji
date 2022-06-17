import { useState } from 'react';
import { login } from '../../utilities/users-service';

import './LoginForm.css'


export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form className='lif' autoComplete="off" >
          <label className='life'>Username</label>
          <input className='life lifi' type="text" name="username" value={credentials.username} onChange={handleChange} required />
          <label className='life'>Password</label>
          <input className='life lifi' type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button className='life lifb' type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}

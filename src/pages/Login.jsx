import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import header from '../assets/header.png';
import body from '../assets/body.png';
import image from '../assets/enjoy300.png';
import Loader from '../components/loader/Loader';
import './login.css'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/user/login`, {
        username,
        password,
      });

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      alert('Login successful!');
      navigate('/account');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Invalid credentials, please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <img src={header} alt="header" className="login-header-image"/>
      <div className="login-page-container">
        <div className="login-form-container">
          <div className="login-welcome-message">
            <h1>Good morning</h1>
            <p>Sign on to manage your accounts.</p>
          </div>

          {errorMessage && <p className="login-error-alert">⚠️ {errorMessage}</p>}

          <form className="login-form-content" onSubmit={handleLogin}>
            <div className="login-form-group">
              <input
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="login-input-field"
              />
            </div>

            <div className="login-form-group">
              <input
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-input-field"
              />
              <span onClick={() => setShowPassword(!showPassword)} className="password-toggle">
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>

            <div className="login-form-options">
              <label>
                <input type="checkbox" name="save-username" /> Save username
              </label>
            </div>
            <button type="submit" className="login-sign-on-button" disabled={loading}>
              {loading ? <Loader /> : 'Sign On'}
            </button>
            <button type="button" className="login-enroll-button">Enroll</button>
          </form>
          <div className="login-help-links">
            <a href="/forgot-username">Forgot username or password?</a>
            <a href="/security-center">Security Center</a>
            <a href="/privacy">Privacy, Cookies, and Legal</a>
          </div>
        </div>

        <div className="login-promotion-banner">
          <h2>$300 checking<br />bonus on us</h2>
          <p>New customers open an eligible checking account<br /> with qualifying direct deposits</p>
          <button className="promotion-get-started-button">Get started &gt;&gt;</button>
        </div>
        <div className="promotion-img-container">
          <img src={image} alt="promotion" className="promotion-image" />
        </div>
      </div>
      <img src={body} alt="body" className="login-body-image" />
    </>
  );
}

export default App;

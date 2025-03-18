import React from 'react';
import './singnup.css'; // Assuming the CSS is saved in a separate file
import { useNavigate } from 'react-router-dom';

const Thankspage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to login.html

    navigate("/login")
  };

  return (
    <div>
      <header>
        <div>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Wells_Fargo_Logo_%282020%29.svg/1200px-Wells_Fargo_Logo_%282020%29.svg.png"
              alt="US Bank Logo"
            />
          </a>
        </div>
        <div>
          {/* <p>Already have an account with us <a href="#">Login</a></p> */}
        </div>
      </header>

      <div className="container">
        <div className="statusbar">
          <div className="dot active"></div>
          <div className="line active"></div>
          <div className="dot active"></div>
          <div className="line active"></div>
          <div className="dot active"></div>
        </div>
      </div>

      <div className="container">
        <h1 style={{ textAlign: 'center', fontWeight: '300' }}>
          You may not proceed with your Application
        </h1>
        <br />
        <div className="flexpage">
          <h3 style={{ textAlign: 'center', fontWeight: '300' }}>
            If you wish to continue, please contact a Customer Success Manager at 866.518.0286 who can help.
          </h3>
        </div>
        <br />
        <hr style={{ opacity: '0.6' }} />
        <br />
        <button
          onClick={handleLogin}
          style={{
            color: '#d71e28',
            textAlign: 'center',
            display: 'block',
            width: '100%',
            padding: '10px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Thankspage;
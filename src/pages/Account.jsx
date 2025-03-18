import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Account = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (!token || !storedUser) {
            navigate('/login'); // Redirect to login if not authenticated
            return;
        }

        // Fetch latest user details using the environment variable for the base URL
        axios.get(`${import.meta.env.VITE_APP_BASE_URL}/user/${storedUser._id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => setUser(response.data))
        .catch(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/login'); // Redirect on error
        });
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login'); // Redirect to login
    };

    if (!user) {
        return <p>Loading account details...</p>;
    }

    return (
        <div className="account-container">
            <div className="account-header page-bx">
                <div className="top-header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Wells_Fargo_Logo_%282020%29.svg/1200px-Wells_Fargo_Logo_%282020%29.svg.png" alt="logo" className="logo" />
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
                <div className="welcome">
                    <h2>Hi, {user.username}</h2>
                </div>
            </div>


            {/* Balance Section */}
            <div className="page-bx">
                <h3>Available Balance</h3>
                <hr />
                <div className="detailarea">
                    <div className="detailbx">
                        <span className="price">${user.amount.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            
            {/* User Details Section */}
            <div className="page-bx user-details-box">
                <h3>Account Details</h3>
                <hr />
                <div className="detailbx">
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Account Number:</strong> 1547XXXXXXXX</p> {/* Hardcoded account number */}
                </div>
            </div>
        </div>
    );
};

export default Account;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHistory, FaPhone } from "react-icons/fa";
import { RiBankCardFill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { FiEye } from "react-icons/fi";
import axios from 'axios';
import Loader from '../components/loader/Loader';

const Account = () => {
    const [user, setUser] = useState(null);
    const [amount, setAmount] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAddingAmount, setIsAddingAmount] = useState(false);
    const navigate = useNavigate();

    // Disable scrolling when popup is open
    useEffect(() => {
        if (isPopupOpen) {
            document.body.classList.add('popup-open');
        } else {
            document.body.classList.remove('popup-open');
        }
    }, [isPopupOpen]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (!token || !storedUser) {
                navigate('/login');
                return;
            }

            setIsLoading(true);
            try {
                const userResponse = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/user/${storedUser._id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(userResponse.data);

                const transactionsResponse = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/transection/all/${storedUser._id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const sortedTransactions = transactionsResponse.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setTransactions(sortedTransactions);
            } catch (error) {
                console.error("Error fetching data:", error);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                navigate('/login');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const addAmount = async (e) => {
        e.preventDefault();

        setIsAddingAmount(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/transection/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount, userId: user._id }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Request failed:", response.status, errorData);
                alert(`Request failed: ${errorData.message || "Unknown error"}`);
                return;
            }

            const data = await response.json();
            console.log("Transaction created:", data);

            setIsPopupOpen(false);

            const token = localStorage.getItem('token');
            const storedUser = JSON.parse(localStorage.getItem('user'));
            const updatedResponse = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/user/${storedUser._id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUser(updatedResponse.data);

            const transactionsResponse = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/transection/all/${storedUser._id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const sortedTransactions = transactionsResponse.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setTransactions(sortedTransactions);
        } catch (err) {
            console.error("An error occurred:", err);
            alert("An error occurred. Please try again.");
        } finally {
            setIsAddingAmount(false);
        }
    };

    if (!user) {
        return <Loader />;
    }

    return (
        <div className="accountpage">
            <div className="blur-overlay">
                {isPopupOpen && (
                    <>

                        <div className="popup-area">
                            <div className="popup-bx">
                                <h3>Add Amount</h3>
                                <input
                                    required
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder='$ 00.00'
                                />
                                <button className="add-amt-btn" type="submit" disabled={isAddingAmount} onClick={addAmount}>
                                    Add Amount
                                </button>
                                <p
                                    className="cls-btn"
                                    onClick={() => setIsPopupOpen(false)}
                                    style={{ cursor: 'pointer', textAlign: 'center', marginTop: '10px' }}
                                >
                                    Close
                                </p>
                            </div>
                        </div>
                        {isAddingAmount ? <Loader />  : ''}
                    </>
                )}

                <div className="account-container">
                    <div className="page-card">
                        <div className="card-header">
                            <h3><RiBankCardFill /> Saving Account</h3>
                            <h3 onClick={handleLogout}><TbLogout /></h3>
                        </div>

                        <div className="price-bx">
                            <p className="price">
                                $ <strong style={{ color: "#000" }}>{user.amount.toFixed(2)}</strong>
                            </p>

                            <div className="account-details">
                                <p onClick={() => alert('Something Went Wrong')}>
                                    Account No.: <strong>BR23-XXXX-XXXX</strong> <FiEye />
                                </p>
                                <p onClick={() => alert('Something Went Wrong')}>
                                    Routing No.: <strong>3542XXXXXX</strong> <FiEye />
                                </p>
                            </div>

                            <button onClick={() => setIsPopupOpen(true)} className="addamount">
                                Add Amount
                            </button>
                        </div>
                    </div>

                    <div className="page-card">
                        <div className="card-header">
                            <h3><FaHistory /> Transaction History</h3>
                        </div>

                        <div style={{ padding: '10px', maxHeight: '300px', overflowY: 'auto' }}>
                            {isLoading ? (
                                <Loader />
                            ) : transactions.length === 0 ? (
                                <p style={{ textAlign: 'center', color: '#666' }}>No transactions found.</p>
                            ) : (
                                transactions.map(transaction => (
                                    <div
                                        key={transaction._id}
                                        style={{
                                            border: '1px solid #e0e0e0',
                                            borderRadius: '8px',
                                            padding: '16px',
                                            marginBottom: '12px',
                                            backgroundColor: '#fff',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                            cursor: 'pointer',
                                            ':hover': {
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                                            }
                                        }}
                                    >
                                        <p style={{ margin: '0', fontWeight: '600', color: '#333', fontSize: '14px' }}>
                                            Transaction ID: {transaction._id}
                                        </p>
                                        <p style={{ margin: '8px 0', color: '#007bff', fontSize: '16px', fontWeight: 'bold' }}>
                                            Amount: ${transaction.amount}
                                        </p>
                                        <p style={{ margin: '8px 0', fontSize: '14px' }}>
                                            Status: <span style={{ color: transaction.status ? '#28a745' : '#ffc107', fontWeight: '600' }}>
                                                {transaction.status ? 'Completed' : 'Pending'}
                                            </span>
                                        </p>
                                        <p style={{ margin: '8px 0', color: '#666', fontSize: '12px' }}>
                                            Created At: {new Date(transaction.createdAt).toLocaleString()}
                                        </p>
                                        {!transaction.status && (
                                            <div style={{
                                                marginTop: '10px',
                                                padding: '8px',
                                                backgroundColor: '#fff3cd',
                                                border: '1px solid #ffeeba',
                                                borderRadius: '4px',
                                                color: '#856404',
                                                fontSize: '12px'
                                            }}>
                                                ⚠️ Your Transection has been blocked due to suspicious activities. Please contact customer support to resolve this issue.
                                                <a
                                                    href="tel:+1234567890"
                                                    style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        marginTop: '8px',
                                                        padding: '6px 12px',
                                                        backgroundColor: '#ffc107',
                                                        color: '#000',
                                                        borderRadius: '4px',
                                                        textDecoration: 'none',
                                                        cursor: 'pointer',
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        transition: 'background-color 0.3s ease'
                                                    }}
                                                >
                                                    <FaPhone style={{ marginRight: '6px' }} />
                                                    Call Customer Support
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
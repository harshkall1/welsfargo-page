import React, { useState } from 'react';
import './singnup.css'; // Ensure the correct CSS file name
import { useNavigate } from 'react-router-dom';
import Loader from '../components/loader/Loader'; // Import the Loader component

const CreateAccount = () => {
    const navigate = useNavigate();

    // State for form data
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phoneNo: "",
        password: "",
        amount: 0,
    });

    // State for loading
    const [loading, setLoading] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
// Handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader

    try {
        // Send a POST request to add a new user using the environment variable
        const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/user/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            // Parse the error message from the response
            const errorData = await response.json();
            console.log(errorData);
            throw new Error(errorData.message || "Failed to add user");
        }

        // Reset form data after successful submission
        setFormData({
            username: "",
            email: "",
            phoneNo: "",
            password: "",
            amount: 0,
        });

        // Navigate to a confirmation page
        navigate('/thanks');
    } catch (error) {
        console.error("Error adding user:", error);
        
        // Ensure a readable error message is displayed
        alert(error.message || "Failed to add user. Please try again.");
    } finally {
        setLoading(false); // Hide loader
    }
};

    return (
        <>
            {/* Show loader while loading */}
            {loading && <Loader />}

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
                        <div className="line"></div>
                        <div className="dot"></div>
                    </div>
                </div>

                <div className="container">
                    <h1>Open a new personal Savings Account</h1>
                    <p>Create a username and password</p>
                    <form id="myForm" onSubmit={handleSubmit}>
                        <div className="flexpage" style={{ display: 'flex', padding: '50px 20px', gap: '60px', alignItems: 'center' }}>
                            <div style={{ width: 'calc(50% - 30px)' }}>
                                <div className="form-group" style={{ width: '100%' }}>
                                    <label htmlFor="username">Choose a username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <br />
                                <div className="form-group" style={{ width: '100%' }}>
                                    <label htmlFor="password">Choose a password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div style={{ width: 'calc(50% - 30px)' }}>
                                <div className="form-group" style={{ width: '100%' }}>
                                    <p>Username is not case-sensitive and cannot contain spaces</p>
                                </div>
                                <br />
                                <div className="form-group" style={{ width: '100%' }}>
                                    <p>Password must have:</p>
                                    <ul style={{ listStyle: 'none', color: '#6b6b6b', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                        <li>At least one uppercase letter and one lowercase letter</li>
                                        <li>At least one number</li>
                                        <li>At least one special character</li>
                                        <li>At least eight characters</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flexpage" style={{ display: 'block' }}>
                            <p style={{ fontSize: '22px' }}>Please double-check your email and mobile number</p>
                            <div style={{ width: 'calc(50% - 30px)' }}>
                                <div className="form-group" style={{ width: '100%' }}>
                                    <label htmlFor="email">Enter Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <br />
                                <div className="form-group" style={{ width: '100%' }}>
                                    <label htmlFor="phoneNo">Enter Your Mobile Number</label>
                                    <input
                                        type="tel"
                                        id="phoneNo"
                                        name="phoneNo"
                                        value={formData.phoneNo}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="button-l" disabled={loading}>
                                {loading ? "Submitting..." : "Next"}
                                {!loading && (
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title></title>
                                            <g id="Complete">
                                                <g id="arrow-right">
                                                    <g>
                                                        <polyline
                                                            data-name="Right"
                                                            fill="none"
                                                            id="Right-2"
                                                            points="16.4 7 21.5 12 16.4 17"
                                                            stroke="#ffffff"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                        ></polyline>
                                                        <line
                                                            fill="none"
                                                            stroke="#ffffff"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            x1="2.5"
                                                            x2="19.2"
                                                            y1="12"
                                                            y2="12"
                                                        ></line>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="contact-info">
                        Call us Monday through Friday 8:00 a.m. - 8:00 p.m. ET at{' '}
                        <a href="tel:8665180286">866.518.0286</a>
                    </div>
                    <div className="footer">
                        <a href="#">Contact Us</a> | <a href="#">Privacy Policy</a> | <a href="#">Disclosures</a> |{' '}
                        <a href="#">Support</a> | <a href="#">About Us</a> | <a href="#">Privacy & Security</a>
                    </div>
                    <footer style={{ textAlign: 'center', fontSize: '14px' }}>
                        <p>© 2025 US Bank. ALL RIGHTS RESERVED. MEMBER F0IC.</p>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default CreateAccount;
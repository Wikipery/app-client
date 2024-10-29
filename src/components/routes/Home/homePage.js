import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './homePage.css'

function HomePage() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const HandleEmailChange = (value) => {
        const newValue = value.target.value;
        setEmail(newValue);
        console.log(newValue);
    }

    const HandleContinueButton = () => {
        navigate('/Language');
    }

    return (
        <div className="home-container">
            <div className='home-body'>
                <span>Love learning new stuff? <br /> get an article on any subject you like! </span>
                <span>Type your email adsress </span>
                <input onChange={HandleEmailChange} className='input-text' type='text' placeholder='yourmail@gmail.com' />
            </div>

            <div className='continue-button-div'>
                <button onClick={HandleContinueButton}>continue</button>
            </div>
        </div>
    );
}

export default HomePage;
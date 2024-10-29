import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import './language.css';

function Language({ setLanguage, lang }) {
    const navigate = useNavigate();

    const handleRadioButtonChange = (event) => {
        const newValue = event.target.value;
        setLanguage(newValue);
    };

    const HandleContinueButton = () => {
        navigate('/Search');
    }

    return (
        <div className="lan-container">

            <div className='lan-body'>
                <p>Choose your page</p>
                <label>
                    <input
                        type="radio"
                        value="en"
                        checked={lang === 'en'}
                        onChange={handleRadioButtonChange} />
                    English
                </label>
                <label>
                    <input
                        type="radio"
                        value="nl"
                        checked={lang === 'nl'}
                        onChange={handleRadioButtonChange} />
                    Dutch
                </label>
                <label>
                    <input
                        type="radio"
                        value="es"
                        checked={lang === 'es'}
                        onChange={handleRadioButtonChange} />
                    Spanish
                </label>
            </div>

            <div className='button-section'>
                <button onClick={HandleContinueButton}>Continue</button>
            </div>
        </div>
    );
}

export default Language;
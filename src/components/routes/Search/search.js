import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Search({ title, setSearch, lang, setContent }) {

    const navigate = useNavigate();

    const HnadleSearchInput = (event) => {
        setSearch(event.target.value);
    }

    const fetchDataFromWikipedia = async () => {
        // const title = setSearch;

        console.log('Fetching Wikipedia for title:', title, "LANG:", lang);
        try {
            const response = await axios.get(`http://localhost:3001/wikipedia/${title}`, {
                params: { lang }
            })

            setContent(response.data.intro);

            console.log("response.data: ", response.data)
            return response.data;
        } catch (error) {
            console.error("Error fetching wikipedia summary: ", error);
            throw error;
        }
    }

    const HandleContinueButton = async () => {
        await fetchDataFromWikipedia();
        navigate('/Content');
    }

    return (
        <div className="search-container">
            <p>Search page</p>

            <input onChange={HnadleSearchInput} type='text' placeholder='what you wanna learn?' />

            <button onClick={HandleContinueButton}>Continue</button>
        </div>
    );
}

export default Search;
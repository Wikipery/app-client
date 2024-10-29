import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Home/homePage';
import Language from './Language/language';
import Content from './Content/content';
import Search from './Search/search';

function MainRouter() {

    const [lang, setLang] = useState('');
    const [search, setSearch] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        console.log(lang, search);
    }, [lang, search])

    return (
        <div className="main-router">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/Language' element={<Language setLanguage={setLang} lang={lang} />} />
                <Route path='/Search' element={<Search setContent={setContent} title={search}
                    setSearch={setSearch} lang={lang} />} />

                <Route path='/Content' element={<Content content={content} />} />
            </Routes>
        </div>
    );
}

export default MainRouter;
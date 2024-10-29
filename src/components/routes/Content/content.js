import React from 'react';

function ContentPage({ content }) {
    return (
        <div className="content-container">
            <p>Content page</p>
            <span>{content}</span>
        </div>
    );
}

export default ContentPage;
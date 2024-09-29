import React from 'react';

import "./index.css"

const ProcessComponent = ({ idx, title, description }) => {
    return (
        <div className="process_container">
            <p className="process_idx">{idx}</p>
            <h1 className="process_header">{title}</h1>
            <p className="process_description">{description}</p>
        </div>
    )
}

export default ProcessComponent;

import React from 'react';

import "./index.css";

const Bubble = () => {
    return (
        <div className="bubble-container">
            <div className="offscreen_circle_tr-container"></div>
            <div className="offscreen_circle_ml-container"></div>
            <div className="offscreen_circle_br-container"></div>
        </div>
    )
}

export default Bubble;

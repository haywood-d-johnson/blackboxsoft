import React from "react";

import "./index.css";
import Bullet from "../../BulletComponent";

const ServiceComponent = ({ list, header }) => {
    return (
        <div className="list_rend-container">
            <h1 className="list_rend-header">{header}</h1>
            {list.map((l, index) => (
                <li className="list_item" key={index}>
                    <p className="list_item_title">
                        <Bullet />
                        {l.title}
                    </p>
                    <p className="list_item_description">{l.description}</p>
                </li>
            ))}
        </div>
    );
};

export default ServiceComponent;

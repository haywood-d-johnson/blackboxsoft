import React from 'react';

import "./index.css"
import ProcessComponent from './SingleProcessComponent';

const Process = () => {

    let i = 0;

    const formatNumber = (idx) => `0${idx}.`;

    const processContents = [
        {
            title: "Partnering for Success",
            description: "Together, we explore your business to identify opportunities for growth."
        },
        {
            title: "Crafting a Winning Strategy",
            description: "We develop a customized plan that aligns your goals with effective user experiences."
        },
        {
            title: "Design That Captivates",
            description: "We create visually appealing designs that reflect your brand and engage your audience."
        },
        {
            title: "Quality Assurance You Can Trust",
            description: "Our dedicated team ensures your website performs flawlessly on all devices."
        },
        {
            title: "Technical Expertise",
            description: "We build a scalable and efficient website that meets your specific requirements."
        },
        {
            title: "A Seamless Launch and Beyond",
            description: "We offer comprehensive support to ensure a smooth transition and ongoing success."
        }
    ];

    return (
        <div className="process">
            <h1 className="process_main_header">Our Work Process</h1>
            <div className="process_main-container">
                    {processContents.map((p, index) => {
                    i++;
                    return (
                    <ProcessComponent
                        idx={formatNumber(i)}
                        title={p.title}
                        description={p.description}
                    />
                    );
                })}
            </div>
        </div>
    )
}


export default Process;

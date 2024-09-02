import React from "react";

const Services = () => {
    const ConsultingServicesList = [
        {
            title: "Technology Strategy",
            description:
                "Developing customized technology roadmaps aligned with business goals.",
        },
        {
            title: "IT Audit and Assessment",
            description:
                "Evaluating existing IT infrastructure and identifying areas for improvement.",
        },
        {
            title: "Cloud Migration",
            description:
                "Assisting in the transition to cloud- based platforms for enhanced scalability and efficiency.",
        },
    ];

    const AdditionalServicesList = [
        {
            title: "Mobile App Development",
            description:
                "Creating native or hybrid mobile apps for iOS and Android platforms.",
        },
        {
            title: "IT Support",
            description:
                "Offering ongoing technical support and troubleshooting services.",
        },
    ];

    const WebDevelopmentServicesList = [
        {
            title: "Custom Website Development",
            description:
                "Creating bespoke websites tailored to specific business needs and objectives.",
        },
        {
            title: "E-commerce Solutions",
            description:
                "Building online stores with robust features for selling products and services.",
        },
        {
            title: "Web Application Development",
            description:
                "Developing web-based applications to streamline processes and improve efficiency.",
        },
        {
            title: "Website Maintenance and Optimization",
            description:
                "Ensuring websites are up-to-date, secure, and perform optimally.",
        },
    ];

    return (
        <section className="services">
            <div className="services-container"></div>
        </section>
    );
};

export default Services;

import React from "react";
const Footer = () => {
    return (
        <>
            <footer>

                <p style={{ display: "inline"}}
                > &copy;  {new Date().getFullYear()} </p>
                <h4 style={{ display: "inline", marginLeft: '10px' }}>
                    Hay
                </h4>

            </footer>
        </>
    );
};

export default Footer;
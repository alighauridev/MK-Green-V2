import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import "../scss/CookieModal.css";
const cookies = new Cookies();

const CookieModal = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const checkCookie = cookies.get("userAcceptedCookies");
        if (!checkCookie) {
            setShowModal(true);
        }
    }, []);

    const acceptCookies = () => {
        cookies.set("userAcceptedCookies", true, { path: "/" });
        // Set other cookies as per requirement
        cookies.set("customAdvertisements", "value", { path: "/" });
        cookies.set("geographicalLocationAdvertisement", "value", { path: "/" });
        cookies.set("sharingOfSocialMedia", "value", { path: "/" });
        cookies.set("functionality", "value", { path: "/" });
        cookies.set("analytics", "value", { path: "/" });
        setShowModal(false);
    };

    return (
        <>
            {showModal && (
                <div className="cookie-modal">
                    <h2>Cookie Consent</h2>
                    <p style={{ width: "70%", margin: "0 auto 20px" }}>
                        We use cookies to enhance your experience. By continuing to visit
                        this site you agree to our use of cookies.
                    </p>
                    <button onClick={acceptCookies}>Accept Cookies</button>
                    <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => setShowModal(false)}
                    >
                        Cancel
                    </button>
                </div>
            )}
        </>
    );
};

export default CookieModal;

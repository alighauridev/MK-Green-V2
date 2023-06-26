import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import "../scss/CookieModal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
const cookies = new Cookies();

const CookieModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [settingsModalOpen, setSettingsModalOpen] = useState(false);
    const [cookieSettings, setCookieSettings] = useState({
        customAdvertisements: true,
        geographicalLocationAdvertisement: true,
        sharingOfSocialMedia: true,
        functionality: true,
        analytics: true
    });

    useEffect(() => {
        const checkCookie = cookies.get("userAcceptedCookies");
        if (!checkCookie) {
            setShowModal(true);
        }
    }, []);

    const acceptCookies = () => {
        cookies.set("userAcceptedCookies", true, { path: "/" });
        // Set other cookies as per requirement
        cookies.set("customAdvertisements", cookieSettings.customAdvertisements, { path: "/" });
        cookies.set(
            "geographicalLocationAdvertisement",
            cookieSettings.geographicalLocationAdvertisement,
            { path: "/" }
        );
        cookies.set("sharingOfSocialMedia", cookieSettings.sharingOfSocialMedia, { path: "/" });
        cookies.set("functionality", cookieSettings.functionality, { path: "/" });
        cookies.set("analytics", cookieSettings.analytics, { path: "/" });
        setShowModal(false);
    };

    const openSettingsModal = () => {
        setSettingsModalOpen(true);
    };

    const confirmSettings = () => {
        acceptCookies();
        setSettingsModalOpen(false);
    };
    const closeSettingsModal = () => {
        setSettingsModalOpen(false);
    };

    const handleCookieSettingsChange = (settingName) => {
        setCookieSettings((prevSettings) => ({
            ...prevSettings,
            [settingName]: !prevSettings[settingName]
        }));
    };

    return (
        <>
            {showModal && (
                <div className="cookie-modal">
                    <h2>Consentement relatif aux cookies</h2>
                    <p style={{ width: "70%", margin: "0 auto 20px" }}>
                        Nous utilisons des cookies pour améliorer votre expérience. En continuant à visiter ce site, vous acceptez notre utilisation des cookies.
                    </p>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>

                        <button onClick={acceptCookies}>Accepter les cookies</button>
                        <button style={{ marginLeft: "10px" }} onClick={openSettingsModal}>
                            Paramètres
                        </button>
                        <button style={{ marginLeft: "10px" }} onClick={() => setShowModal(false)}>
                            Annuler
                        </button>
                    </div>
                </div>
            )}

            {settingsModalOpen && (
                <Modal
                    show={true}
                    onHide={closeSettingsModal}
                    className="settings-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Paramètres des cookies</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Check
                                type="checkbox"
                                id="customAdvertisements"
                                label="Publicités personnalisées"
                                checked={cookieSettings.customAdvertisements}
                                onChange={() => handleCookieSettingsChange("customAdvertisements")}
                            />
                            <Form.Check
                                type="checkbox"
                                id="geographicalLocationAdvertisement"
                                label="Publicité basée sur la localisation géographique"
                                checked={cookieSettings.geographicalLocationAdvertisement}
                                onChange={() =>
                                    handleCookieSettingsChange(
                                        "geographicalLocationAdvertisement"
                                    )
                                }
                            />
                            <Form.Check
                                type="checkbox"
                                id="sharingOfSocialMedia"
                                label="Partage sur les réseaux sociaux"
                                checked={cookieSettings.sharingOfSocialMedia}
                                onChange={() => handleCookieSettingsChange("sharingOfSocialMedia")}
                            />
                            <Form.Check
                                type="checkbox"
                                id="functionality"
                                label="Fonctionnalité"
                                checked={cookieSettings.functionality}
                                onChange={() => handleCookieSettingsChange("functionality")}
                            />
                            <Form.Check
                                type="checkbox"
                                id="analytics"
                                label="Analyse"
                                checked={cookieSettings.analytics}
                                onChange={() => handleCookieSettingsChange("analytics")}
                            />
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={confirmSettings}>
                            confirmer
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};

export default CookieModal;

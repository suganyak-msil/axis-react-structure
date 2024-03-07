import React, { useState } from 'react';
// import './Popup.css'; // Import your CSS file for styling

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="popup-container">
            <button onClick={togglePopup}>Open Popup</button>

            {isOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Popup Content</h2>
                        <p>This is some content inside the popup.</p>
                        <button onClick={togglePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popup;

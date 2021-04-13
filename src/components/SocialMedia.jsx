import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

function SocialMedia() {
    return (
        <div className="social">
            <a href="https://www.facebook.com/" className="facebook">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.google.com/" className="google">
            <FontAwesomeIcon icon={faGoogle} />
            </a>
        </div>
    )
}

export default SocialMedia;
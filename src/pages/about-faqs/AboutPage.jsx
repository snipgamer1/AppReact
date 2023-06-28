import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

const Aboutpage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in Route:', location.pathname); // '/about | /faqs'

    const navigates = (path) => {
        navigate(path)
    }

    const goBack = () => {
        navigate(-1)
    }

    const goForward = () => {
        navigate(1)
    }

    return (
        <div>
            <h1>
                About | FAQs
            </h1>
            <div>
                <button onClick={ () => navigates('/')}>
                    Go To Home
                </button>
                <button onClick = { goBack }>
                    Go Back
                </button>
                <button onClick = { goForward }>
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default Aboutpage;

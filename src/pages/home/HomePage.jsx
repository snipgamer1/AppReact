import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in Route:', location.pathname); // '/about | /faqs'

    const navigateTo = (path) => {
        navigate(path);
    }

    const navigateProps = (path) => {
        navigate(path, { state: { online: true } });
    }


    return (
        <div>
            <h1>Home page</h1>
            <button onClick={() => navigateProps('/online-state')}>
                Go To Page with State / Query Params
            </button>

            <button onClick={() => navigateTo('/profile')}>
                Go To Profile
            </button>
            

        </div>
    );
}

export default HomePage;

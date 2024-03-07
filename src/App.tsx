import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { screenNames } from './helpers/constants';

import './assets/css/index.css';
import './assets/css/fonts.css';
import './assets/css/themes.css';
import './assets/css/atomstyles.css';
import LandingPage from './components/pages/pre-login/LandingPage';

const App = () => {


    const onAppContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
    }

    return (
        <div id="app" className={"app "} onContextMenu={onAppContextMenu} >
            <BrowserRouter >
                <Routes>
                    <Route path={screenNames.landingScreen} element={<LandingPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
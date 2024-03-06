import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './globalstore/store';
import { saveGlobalStore } from './globalstore/reducers/commonreducer';
import { useAppSelector } from './globalstore/storehooks';
import { AppConstants, GlobalStorageKeys } from './common/constants';
import { HandleGeneralException } from './components/common/HandleGeneralException';

import { NewUserLScreen } from './screens/landing/NewUserLScreen';
import { CardsScreen } from './screens/landing/CardsScreen';
import { OverviewScreen } from './screens/landing/OverviewScreen';
import { TaskScreen } from './screens/landing/TaskScreen';
import { NoPage } from './screens/others/NoPage';

import './assets/css/index.css';
import './assets/css/fonts.css';
import './assets/css/themes.css';
import './assets/css/atomstyles.css';

const App = () => {

    // ===============================================
    // Setting Theme 

    let ccurrenttheme = useAppSelector((state) => state.common[GlobalStorageKeys.CurrentTheme]);

    // ===============================================
    // Save Store and unSubscribe streaming 

    useEffect(()=>{
        window.addEventListener("beforeunload",()=>{
            saveGlobalStore(store.getState().common);
        });
    },[]);


    // ===============================================
    // To prevent right-click 

    const onAppContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
    }

    // ===============================================
    return (
        <div id="app" className={"app " + ccurrenttheme} onContextMenu={onAppContextMenu} >
            <BrowserRouter >
                <Routes>
                    <Route path={AppConstants.Homepage + ''} element={<NewUserLScreen />} />
                    <Route path={AppConstants.Homepage + 'newuserlanding'} element={<NewUserLScreen />} />
                    <Route path={AppConstants.Homepage + 'cards'} element={<CardsScreen />} />
                    <Route path={AppConstants.Homepage + 'overview'} element={<OverviewScreen />} />
                    <Route path={AppConstants.Homepage + 'task'} element={<TaskScreen />} />
                    <Route path='*' element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
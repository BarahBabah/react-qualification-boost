import React, { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;

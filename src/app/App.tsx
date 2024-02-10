import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

function App() {
    const { theme } = useTheme();

    return (
        <div id="app-root" className={classNames('app', {}, [theme])}>
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

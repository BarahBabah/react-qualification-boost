import { AboutPage } from 'Pages/AboutPage';
import { MainPage } from 'Pages/MainPage';
import { NotFoundPage } from 'Pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}
export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '/*',
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
    },
};

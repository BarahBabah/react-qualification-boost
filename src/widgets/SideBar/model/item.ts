import React from 'react';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icon/about-20-20.svg';
import MainIcon from 'shared/assets/icon/main-20-20.svg';
import profileIcon from 'shared/assets/icon/profile-20-20.svg';

export interface SideBarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
export const SideBarItemsList: SideBarItemType[] = [
    {
        path: RouterPath.main,
        Icon: MainIcon,
        text: 'MainLink',
    },
    {
        path: RouterPath.about,
        Icon: AboutIcon,
        text: 'AboutLink',
    },
    {
        path: RouterPath.profile,
        Icon: profileIcon,
        text: 'Profile',
        authOnly: true,
    },
];

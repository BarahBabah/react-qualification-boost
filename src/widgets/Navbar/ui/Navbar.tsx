import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        {/* <ThemeSwitcher className="dsadas" /> */}
        <div className={cls.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={cls.mainLink}
                to="/about"
            >
                ABOUT
            </AppLink>

            <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={cls.aboutLink}
                to="/"
            >
                Main
            </AppLink>
        </div>
    </div>
);

import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icon/about-20-20.svg';
import MainIcon from 'shared/assets/icon/main-20-20.svg';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const { t } = useTranslation();

    return (
        <div
            data-testid="SideBar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid="SideBar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <nav className={cls.items}>
                <div className={cls.item}>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RouterPath.main}>
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>{t('MainLink')}</span>
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RouterPath.about}>
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>{t('AboutLink')}</span>
                    </AppLink>
                </div>
            </nav>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};

export default SideBar;

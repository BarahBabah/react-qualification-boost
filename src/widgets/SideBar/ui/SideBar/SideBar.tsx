import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/ui/Button';

import { SideBarItemsList } from '../../model/item';
import cls from './SideBar.module.scss';
import SideBarItem from './SideBarItem/SideBarItem';

interface SideBarProps {
    className?: string;
}

const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="SideBar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
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
                {SideBarItemsList.map((item) => (
                    <SideBarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </nav>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
});

export default SideBar;

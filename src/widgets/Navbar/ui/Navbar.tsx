import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher className="dsadas" />
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
          to={"/about"}
        >
          ABOUT
        </AppLink>

        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.aboutLink}
          to={"/"}
        >
          Main
        </AppLink>
      </div>
    </div>
  );
};

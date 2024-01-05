import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Preloader.module.scss';

interface PreloaderProps {
    className?: string;
}

const Preloader = ({ className }: PreloaderProps) => (
    <span className={classNames(cls.Preloader, {}, [className])} />
);
export default Preloader;

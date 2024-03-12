import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}
export enum TextAlign {
    CENTER = 'center',
    RIGHT = 'right',
    LEFT = 'left',
}
interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

const Text = memo((props: TextProps) => {
    const {
        className, title, align = TextAlign.LEFT, text, theme = TextTheme.PRIMARY,
    } = props;
    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
    };
    return (
        <div
            className={classNames(cls.Text, mods, [
                className,
            ])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});

export default Text;

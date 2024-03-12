import { CSSProperties, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Avatar.module.scss';

interface AvatarProps {
   className?: string;
   src?: string;
   size?: number;
   alt?: string;
}

const Avatar = ({
    className, src, size, alt,
}: AvatarProps) => {
    const { t } = useTranslation();
    const mods: Mods = {};
    const styles = useMemo <CSSProperties>(() => (
        {
            width: size || 100,
            height: size || 100,
        }
    ), [size]);
    return (
        <img
            src={src}
            style={styles}
            alt={alt || t('avatar')}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};

export default Avatar;

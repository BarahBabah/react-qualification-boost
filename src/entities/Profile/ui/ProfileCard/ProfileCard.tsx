import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Preloader } from 'shared/ui/Preloader';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className, data, error, isLoading,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Preloader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('An error occurred while uploading the profile')}
                    text={t('Try refreshing the page')}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('editProfile')}
                </Button>
                <div className={cls.data}>
                    <Input
                        className={cls.input}
                        value={data?.first}
                        placeholder={t('firstname')}
                    />
                    <Input
                        className={cls.input}
                        value={data?.lastname}
                        placeholder={t('lastname')}
                    />
                </div>
            </div>
        </div>
    );
};

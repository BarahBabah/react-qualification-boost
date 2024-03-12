import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Preloader } from 'shared/ui/Preloader';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Country, CountrySelect } from '../../../../entities/Country';
import { Currency, CurrencySelect } from '../../../../entities/Currency/index';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean,
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void,
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void,
    onChangeAvatar?: (value?: string) => void,
    onChangeUsername?: (value?: string) => void,
    onChangeCurrency?: (currency: Currency) => void,
    onChangeCountry?: (country: Country) => void,

}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeLastname,
        onChangeFirstname,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
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
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    className={cls.input}
                    value={data?.first}
                    placeholder={t('firstname')}
                    readonly={readonly}
                    onChange={onChangeFirstname}

                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('lastname')}
                    readonly={readonly}
                    onChange={onChangeLastname}

                />
                <Input
                    className={cls.input}
                    value={data?.age}
                    placeholder={t('Age')}
                    readonly={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    className={cls.input}
                    value={data?.city}
                    placeholder={t('City')}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    className={cls.input}
                    value={data?.avatar}
                    placeholder={t('Avatar')}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
                <Input
                    className={cls.input}
                    value={data?.username}
                    placeholder={t('Username')}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />

            </div>
        </div>
    );
};

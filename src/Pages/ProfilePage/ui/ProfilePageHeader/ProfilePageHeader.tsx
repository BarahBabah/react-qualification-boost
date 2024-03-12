import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import Text from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { getProfileReadonly, profileActions, updateProfileData } from '../../../../entities/Profile';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
   className?: string;
}

const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(true));
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {readonly ? (
                <Button onClick={onEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('editProfile')}
                </Button>
            ) : (
                <>
                    <Button onClick={onCancelEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED}>
                        {t('Сancel')}
                    </Button>
                    <Button onClick={onSave} theme={ButtonTheme.OUTLINE}>
                        {t('Save')}
                    </Button>
                </>
            )}
        </div>
    );
};

export default ProfilePageHeader;

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, {
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useEffect } from 'react';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { useSelector } from 'react-redux';

import {
    ProfileCard,
    fetchProfileData,
    profileReducer,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
} from '../../../entities/Profile';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}
const reducers: ReducersList = {
    profile: profileReducer,
};
const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmouth>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                {t('PROFILE PAGE')}
                <ProfileCard data={data} error={error} isLoading={isLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;

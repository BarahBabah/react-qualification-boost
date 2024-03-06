import { BugButton } from 'app/providers/ErrorBoundary';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '../../../entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            <div>{t('MainPage')}</div>
            <Counter />
        </div>
    );
};

export default MainPage;

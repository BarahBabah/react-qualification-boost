import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
   className?: string;
}
// КОМПОНЕНТ ДЛЯ ТЕСТИРОВАНИЯ
const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button
            onClick={onThrow}
        >
            {t('throw error')}
        </Button>
    );
};

export default BugButton;

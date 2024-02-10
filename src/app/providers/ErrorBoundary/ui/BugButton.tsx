import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string;
}

const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const onThrow = () => {
        try {
            setError(true);
        } catch (error) {
            console.error('Error in BugButton:', error);
        }
    };

    useEffect(() => {
        if (error) {
            // Вызываем ошибку в блоке try/catch, чтобы ее можно было обработать ErrorBoundary
            try {
                throw new Error();
            } catch (error) {
                console.error('Error in BugButton:', error);
            }
        }
    }, [error]);

    return <Button onClick={onThrow}>{t('throw error')}</Button>;
};

export default BugButton;

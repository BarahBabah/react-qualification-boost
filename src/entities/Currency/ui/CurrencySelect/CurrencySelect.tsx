import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Select from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
   className?: string;
   value?: Currency;
   readonly?: boolean;
   onChange?: (value: Currency) => void;
}
const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.KRW, content: Currency.KRW },
];
export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();
    const onChangeHandler = useCallback((value) => {
        onChange?.(value as Currency);
    }, [onChange]);
    return (
        <Select
            className={classNames('', {}, [className])}
            options={options}
            value={value}
            label={t('Сurrency')}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

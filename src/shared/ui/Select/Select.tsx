import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo, memo } from 'react';
import cls from './Select.module.scss';

interface selectOption {
    value: string;
    content: string;
}

interface SelectProps {
   className?: string;
   label?: string;
   options: selectOption[];
   value?: string;
   readonly?: boolean;
   onChange?: (value?: string) => void;
}

const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            key={opt.value}
            value={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {

    };
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                disabled={readonly}
                onChange={onChangeHandler}
                className={cls.select}
                value={value}
            >
                {optionList}
            </select>
        </div>
    );
});

export default Select;

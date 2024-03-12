import React, {
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    autofocus?: boolean;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        value,
        onChange,
        className,
        placeholder,
        autofocus,
        readonly,
        type = 'text',
        ...otherProps
    } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const isCaretVisible = isFocused && !readonly;
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };
    const onBlur = () => {
        setFocused(false);
    };
    const onFocus = () => {
        setFocused(true);
    };
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autofocus) {
            setFocused(true);
            inputRef.current?.focus();
        }
    }, [autofocus]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    className={classNames(cls.input, mods)}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                    {...otherProps}
                    readOnly={readonly}
                />
                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{
                            left: `${caretPosition * 9}px`,
                        }}
                    />
                )}
            </div>
        </div>
    );
});

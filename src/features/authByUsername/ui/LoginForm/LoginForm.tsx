import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                className={cls.input}
                autofocus
                type="text"
                placeholder={t('Login')}
            />
            <Input
                className={cls.input}
                type="password"
                placeholder={t('Password')}
            />
            <Button className={cls.loginBtn}>{t('Login')}</Button>
        </div>
    );
};

export default LoginForm;

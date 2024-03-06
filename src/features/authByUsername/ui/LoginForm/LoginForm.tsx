import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/LoginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';

interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispath = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispath(loginActions.setUsername(value));
        },
        [dispath],
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispath(loginActions.setPassword(value));
        },
        [dispath],
    );

    const onLoginClick = useCallback(() => {
        dispath(loginByUsername({ username, password }));
    }, [dispath, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('authorizationForm')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                className={cls.input}
                autofocus
                type="text"
                placeholder={t('Login')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                className={cls.input}
                type="password"
                placeholder={t('Password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                disabled={isLoading}
                onClick={onLoginClick}
                className={cls.loginBtn}
            >
                {t('Login')}
            </Button>
        </div>
    );
});

export default LoginForm;

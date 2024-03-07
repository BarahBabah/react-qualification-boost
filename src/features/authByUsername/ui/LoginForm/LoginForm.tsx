import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import Text, { TextTheme } from 'shared/ui/Text/Text';
// import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import DynamicModuleLoader, {
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import { loginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispath = useDispatch();
    // const store = useStore() as ReduxStoreWithManager;
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    const initialReducers: ReducersList = {
        loginForm: loginReducer,
    };

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
        <DynamicModuleLoader removeAfterUnmouth reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;

import { DeepPartial } from '@reduxjs/toolkit';
import { loginReducer, loginActions } from './LoginSlice';
import { LoginSchema } from '../types/LoginSchema';

describe('CounterSlice.test', () => {
    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('123')),
        ).toEqual({
            password: '123',
        });
    });
    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = { username: 'name' };
        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername('name')),
        ).toEqual({
            username: 'name',
        });
    });
});

import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'nickname' },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('nickname');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});

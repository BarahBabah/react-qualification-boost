import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: '12345678' },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('12345678');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});

import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    test('shouild return readonly true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('shouild return readonly false', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(false);
    });
    test('shouild return isLoading undef', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});

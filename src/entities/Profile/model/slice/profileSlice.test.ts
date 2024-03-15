import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { profileReducer, profileActions } from './profileSlice';
import { ProfileSchema, ValidateProfileErrors } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({ readonly: true });
    });
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
            readonly: true,
        });
    });
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };

        expect(profileReducer(
              state as ProfileSchema,
              profileActions.updateProfile({ username: '1234567' }),
        )).toEqual(
            {
                form: { username: '1234567' },
            },
        );
    });
    test('test update profile servise pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateError: [ValidateProfileErrors.SERVER_ERROR] };

        expect(profileReducer(
              state as ProfileSchema,
              updateProfileData.pending,
        )).toEqual(
            { isLoading: true, validateErrors: undefined },
        );
    });
    test('test update profile servise fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false };

        expect(profileReducer(
              state as ProfileSchema,
              updateProfileData.fulfilled(data, ''),
        )).toEqual(
            {
                isLoading: false,
                validateErrors: undefined,
                readonly: true,
                validateError: undefined,
                form: data,
                data,
            },
        );
    });
});

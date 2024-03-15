import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileErrors } from '../../types/profile';

describe('getProfileValidateErrors', () => {
    test('should return errors', () => {
        const errors = [
            ValidateProfileErrors.INCORRECT_USER_AGE,
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.NO_DATA];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: errors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });
    test('should return error no data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileErrors.NO_DATA],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileErrors.NO_DATA]);
    });
    test('shouild return isLoading undef', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrors } from '../../types/profile';

const data = {
    username: 'Lorem_Ipsum',
    first: 'Lorem',
    lastname: 'Ipsum',
    city: 'Random',
    currency: Currency.RUB,
    country: Country.Belarus,
    age: 22,
};

describe('validateProfileData.test', () => {
    test('valid profile', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });
    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
        ]);
    });
    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_AGE,
        ]);
    });
    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_COUNTRY,
        ]);
    });
    test('incorrect all', async () => {
        const result = validateProfileData({
            ...data, country: undefined, age: undefined, lastname: '', first: '',
        });
        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_USER_AGE,
            ValidateProfileErrors.INCORRECT_USER_COUNTRY,
        ]);
    });
    test('no data', async () => {
        const result = validateProfileData();
        expect(result).toEqual([
            ValidateProfileErrors.NO_DATA,
        ]);
    });
});

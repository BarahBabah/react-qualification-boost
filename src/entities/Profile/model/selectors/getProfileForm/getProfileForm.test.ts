import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('shouild return data value', () => {
        const formData = {
            username: 'Lorem_Ipsum',
            first: 'Lorem',
            lastname: 'Ipsum',
            city: 'Random',
            currency: Currency.RUB,
            country: Country.Belarus,
            age: 22,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: formData,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(formData);
    });
    test('shouild return data undef', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});

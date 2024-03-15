import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('shouild return data value', () => {
        const data = {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('shouild return data undef', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});

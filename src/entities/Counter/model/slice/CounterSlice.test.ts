import { counterReducer, counterActions } from './CounterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('CounterSlice.test', () => {
    test('decremented', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decremented())).toEqual({
            value: 9,
        });
    });
    test('incremented', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.incremented())).toEqual({
            value: 11,
        });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.incremented())).toEqual(
            {
                value: 1,
            },
        );
    });
});

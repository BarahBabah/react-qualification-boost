import { Counter } from './ui/Counter';
import type { CounterSchema } from './model/types/counterSchema';
import { counterReducer, counterActions } from './model/slice/CounterSlice';

export {
    Counter, CounterSchema, counterReducer, counterActions,
};

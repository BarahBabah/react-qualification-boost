import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const CounterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.incremented());
    };
    const decrement = () => {
        dispatch(counterActions.decremented());
    };
    return (
        <div data-testid="Counter">
            <Button data-testid="increment-btn" onClick={increment}>
                {t('increment')}
            </Button>
            <h1 data-testid="value-title">{CounterValue}</h1>
            <Button data-testid="decrement-btn" onClick={decrement}>
                {t('decrement')}
            </Button>
        </div>
    );
};

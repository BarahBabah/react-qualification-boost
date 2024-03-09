import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmouth?: boolean;
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers = {}, removeAfterUnmouth } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispath = useDispatch();
    useEffect(() => {
        Object.entries(reducers).forEach(([name, value]) => {
            store.reducerManager.add(name as StateSchemaKey, value);
            dispath({ type: `@INIT ${name} reducer` });
        });
        return () => {
            if (removeAfterUnmouth) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispath({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};

export default DynamicModuleLoader;

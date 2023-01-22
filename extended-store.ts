import { storeToRefs, type StoreDefinition } from 'pinia';

export const defineExtendedStore = <T extends StoreDefinition>(store: T) => {
    return (): ReturnType<T> & {
        asRef: () => ReturnType<typeof storeToRefs<ReturnType<T>>>;
    } => {
        return Object.assign(store(), {
            asRef: () => {
                return storeToRefs(store());
            },
        }) as any;
    };
};

// src/redux/rootTypes.ts
import  store from './store';

export type RootState = ReturnType<typeof store.getState>;

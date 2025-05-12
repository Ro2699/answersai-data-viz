import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';

export const store = configureStore({
   reducer: {
     ui: uiReducer,
   },
 });

// Types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

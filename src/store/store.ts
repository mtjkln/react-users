import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";

const store = configureStore({ reducer: userSlice.reducer });

export const userSliceAction = userSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

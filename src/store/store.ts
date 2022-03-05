import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		//todo 여기에 reducer 추가.
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

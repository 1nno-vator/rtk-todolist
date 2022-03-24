import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from '../feature/todolist'

import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        todo: todoListReducer
    },
    middleware: (getDefaultMiddleware) => {
        console.log(getDefaultMiddleware);
        return getDefaultMiddleware().concat(logger)
    }
})
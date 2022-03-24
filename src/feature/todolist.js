import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [
        { idx: 1, title: '1번 입니다.', content: '1번의 내용' }, 
        { idx: 2, title: '2번 입니다.', content: '2번의 내용' }, 
        { idx: 3, title: '3번 입니다.', content: '3번의 내용' }
    ],
    isModalOpen: false
}

export const todoListSlice = createSlice({
    name: 'TO-DO-LIST',
    initialState,
    reducers: {
        ADD_TODO: (state = initialState, action) => {
            console.log(action);
            alert('hi');
            // state.data = [...state.data, action.payload];
        },
        DELETE_TODO: (state = initialState, action) => {
            console.log(action);
            state.data = state.data.filter(v => {
                return v.idx !== action.payload;
            })
        },
        MODAL_TOGGLE: (state = initialState, action) => {
            state.isModalOpen = !state.isModalOpen;
        }
    }
})

export const { ADD_TODO, DELETE_TODO, MODAL_TOGGLE } = todoListSlice.actions;

export default todoListSlice.reducer;
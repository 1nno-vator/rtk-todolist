import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [
        { idx: 1, title: '1번 입니다.', content: '1번의 내용', isDone: false }, 
        { idx: 2, title: '2번 입니다.', content: '2번의 내용', isDone: false }, 
        { idx: 3, title: '3번 입니다.', content: '3번의 내용', isDone: false }
    ],
    isModalOpen: false
}

export const todoListSlice = createSlice({
    name: 'TO-DO-LIST',
    initialState,
    reducers: {
        ADD_TODO: (state = initialState, action) => {
            state.data = [
                    ...state.data, 
                    {
                        idx: state.data.length + 1,
                        title: action.payload.title,
                        content: action.payload.content,
                        isDone: false
                    }
                ];
        },
        DELETE_TODO: (state = initialState, action) => {
            console.log(action);
            state.data = state.data.filter(v => {
                return v.idx !== action.payload;
            })
        },
        MODAL_TOGGLE: (state = initialState, action) => {
            state.isModalOpen = !state.isModalOpen;
        },
        DONE_TASK: (state = initialState, action) => {
            state.data = state.data.map((v,i) => v.idx !== action.payload ? v : { ...v, isDone: !v.isDone });
            
            let upSide = state.data.filter(v => v.isDone === true).sort((a,b) => a.idx - b.idx);
            let downSide = state.data.filter(v => v.isDone === false).sort((a,b) => a.idx - b.idx);
            
            let newArray = upSide.concat(downSide);
            
            state.data = [ ...newArray ];
        }
    }
})

export const { ADD_TODO, DELETE_TODO, MODAL_TOGGLE, DONE_TASK } = todoListSlice.actions;

export default todoListSlice.reducer;
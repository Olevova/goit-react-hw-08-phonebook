import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
    name: 'filter',
    initialState:"",
    reducers: {
        filteradd(state,action) {
            return state = action.payload
        },
    }
});

export const {filteradd} = contactSlice.actions;
export const filterReducer = contactSlice.reducer;

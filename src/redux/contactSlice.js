import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, deleteContact} from '../servise/fetchContacts'

const handlePending = state => {
    state.isLoading = true;
};


const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
        
    },
    extraReducers: {
        [getContacts.pending]:handlePending,
        [getContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.contacts = action.payload;
        },
        [getContacts.rejected](state, action) {
            state.error = action.payload;
        },
        [addContacts.pending]:handlePending,
        [addContacts.fulfilled](state, action){
            state.contacts.push(action.payload);
            state.isLoading = false;
        },
        [addContacts.rejected](state,action){
              state.error = action.payload;  
        },
        [deleteContact.pending]:handlePending,
        [deleteContact.fulfilled](state, action) {
            state.contacts = state.contacts.filter(item => item.id !== action.payload );
            state.isLoading = false;
        },
        [deleteContact.rejected](state, action) {
            state.error = action.payload;
        }

    }

})


export const contactReducer = contactSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { postRegister, postLogin, postLogOut, reFreshUser } from 'servise/fetch';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const registerSlice = createSlice({
    name: 'register',
    initialState:
    {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder =>
        builder
            .addCase(postRegister.fulfilled, (state, action)=>{
                state.user = action.payload.user;
                state.token = action.payload.token;
                if (action.payload.token) {
                    state.isLoggedIn = true
                }
            }).addCase(postLogin.fulfilled, (state, action)=>
        {
                state.user = action.payload.user;
                state.token = action.payload.token;
                if (action.payload.token) {
                    state.isLoggedIn = true
                }
            }).addCase(postLogOut.fulfilled, (state, action)=>
        {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = null
            }).addCase(reFreshUser.fulfilled, (state, action) =>
            {
                state.user = action.payload.data;
                state.isLoggedIn = true;
                
           } )
});

const persistConfig = {
    key:'register',
    storage,
    whitelist: ['token'], 
};

console.log(persistConfig.whitelist,  22);

// export const registerReducer = registerSlice.reducer;
export const registerReducer = persistReducer(persistConfig, registerSlice.reducer);
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const offAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ``;
}


export const postRegister = createAsyncThunk('register/user', async (credential,thunkAPI) => {
    try{
        const { data } = await axios.post('/users/signup', credential);
        setAuthHeader(data.token);
        return data
    }
    catch(e) {
        return thunkAPI.fulfillWithValue (e.message);
    }
});

export const postLogin = createAsyncThunk('login/user', async (credential,thunkAPI) => {
    try{

        const { data } = await axios.post('users/login', credential);
        setAuthHeader(data.token);
        console.log(data);
        return data
    }
    catch(e) {
        return thunkAPI.fulfillWithValue (e.message);
    }
});

export const postLogOut = createAsyncThunk('logout/user', async (_, thunkAPI) => {
    try {
        const res = await axios.post('users/logout') 
        offAuthHeader()
        return res
    }
    catch(e) {
        return thunkAPI.fulfillWithValue (e.message);
    }
})

export const reFreshUser = createAsyncThunk('refresh/user', async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().register;
    if (!token) {return thunkAPI.rejectWithValue('Unable to fetch user'); };
    setAuthHeader(token);
    try {
        const res = await axios.get('/users/current') 
            return res.data
    }
    catch(e) {
        return thunkAPI.fulfillWithValue (e.message);
    }
})
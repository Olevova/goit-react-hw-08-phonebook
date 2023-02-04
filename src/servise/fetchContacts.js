import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getContacts = createAsyncThunk('get/contacts', async (_,thunkAPI) => {
    try{
        const { data } = await axios.get('/contacts');
        console.log(data, 15);
        // setAuthHeader(data.token);
        return data
    }
    catch(e) {
        return thunkAPI.fulfillWithValue (e.message);
    }
});

export const addContacts = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
   try {
  const response = await axios.post("/contacts",contact);
     return response.data;
  }
   catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data.id;
      }
  catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
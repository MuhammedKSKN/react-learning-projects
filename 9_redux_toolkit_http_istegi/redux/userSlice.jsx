import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
    users: [],
    loading: false,

}
export const getAllUsers = createAsyncThunk('users', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
    return response.data

})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //http isteği olmaz ise kullanılır
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
    }

});

export const { } = userSlice.actions
//üstteki {} kısmına reducers içindeki fonksiyonlar yazılır
export default userSlice.reducer
//üsttekiler reducerleri ve actionsları dışarı aktarıyor

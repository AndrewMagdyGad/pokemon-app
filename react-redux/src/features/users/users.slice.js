import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

// Async action
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch(USERS_URL);
    const users = await response.json();
    return users;
});

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export default usersSlice.reducer;
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (formData) => {
        const {email, password, username} = Object.fromEntries(formData);
        const userData = JSON.stringify({username, email, password});
        console.log("registerUser - formData:", userData)
        const response = await axios.post('/api/user/register', userData);
        console.log("registerUser - response.data:", response.data)
        return response.data;
    });

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (formData) => {
        const {username, password } = Object.fromEntries(formData);
        const userData = JSON.stringify({username, password});
        const response = await axios.post('/api/user/login', userData);
        return response.data;
    });

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.error = null;
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    },
});

export const {setUser, setToken, logoutUser} = userSlice.actions;

export default userSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
});

const initialState = {
    data: [],  
    loading: false,
    error: null
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: builder => { 
        builder
            .addCase(getPosts.pending, (state) => { 
                state.loading = true
            })
            .addCase(getPosts.fulfilled, (state, action) => { 
                state.loading = false;
                state.data = action.payload
            })
            .addCase(getPosts.rejected, (state, action) => { 
                state.loading = false;
                state.error = action.payload
            })
    }
})

export default postsSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDirectory = createAsyncThunk('businessDirectory/getDirectory', async () => {
    return fetch('https://smoothcommerce.tech/api.json').then(res => res.json())
})

const businessDirectorySlice = createSlice({
    name: 'businessDirectory',
    initialState : { 
        directory: [],
        status : null
    },
    extraReducers: {
        [getDirectory.pending]: (state) => {
            state.status = 'loading';
        },
        [getDirectory.fulfilled]: (state, { payload }) => {
            state.directory = payload;
            state.status = 'success';
        },
        [getDirectory.rejected]: (state) => {
            state.status = 'rejected';
        }
    }
});

export default businessDirectorySlice.reducer;
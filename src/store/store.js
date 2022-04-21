import { configureStore } from '@reduxjs/toolkit';
import businessDirectoryReducer from './businessDirectorySlice';

export default configureStore({
    reducer: {
        businessDirectory : businessDirectoryReducer
    }
});
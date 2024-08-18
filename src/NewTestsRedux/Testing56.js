import { createSlice, configureStore } from '@reduxjs/toolkit';

// Create a slice
const stringSlice = createSlice({
    name: 'globalString',
    initialState: {
        value: ''
    },
    reducers: {
        setString: (state, action) => {
            state.value = action.payload;
        }
    }
});

// Export the action
export const { setString } = stringSlice.actions;

// Configure the store
const store = configureStore({
    reducer: {
        globalString: stringSlice.reducer
    }
});

export default store;

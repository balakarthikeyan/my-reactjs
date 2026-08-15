import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        toggleMessageShow: false, // Initial state set to false
    },
    reducers: {
        toggleMessage: (state) => {
            state.toggleMessageShow = !state.toggleMessageShow; // Toggles boolean flag directly
        },
    },
});

export const { toggleMessage } = toggleSlice.actions;
export default toggleSlice.reducer;
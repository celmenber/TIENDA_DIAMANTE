import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'cartPanel/state',
  initialState: true,
  reducers: {
    toggleCartPanel: (state, action) => !state,
    openCartPanel: (state, action) => true,
    closeCartPanel: (state, action) => false,
  },
  extraReducers: {},
});

export const { toggleCartPanel, openCartPanel, closeCartPanel } = stateSlice.actions;

export const selectCartPanelState = ({ cartPanel }) => cartPanel.state;

export default stateSlice.reducer;



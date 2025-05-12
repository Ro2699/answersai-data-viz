import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  isSlideOverOpen: boolean;
  hoveredDataPoint: any | null;
}

const initialState: UIState = {
  isSlideOverOpen: false,
  hoveredDataPoint: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openSlideOver: (state) => {
      state.isSlideOverOpen = true;
    },
    closeSlideOver: (state) => {
      state.isSlideOverOpen = false;
    },
    setHoveredDataPoint: (state, action) => {
      state.hoveredDataPoint = action.payload;
    },
    clearHoveredDataPoint: (state) => {
      state.hoveredDataPoint = null;
    },
  },
});

export const {
  openSlideOver,
  closeSlideOver,
  setHoveredDataPoint,
  clearHoveredDataPoint,
} = uiSlice.actions;

export default uiSlice.reducer;

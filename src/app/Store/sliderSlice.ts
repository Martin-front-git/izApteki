import { createSlice } from '@reduxjs/toolkit';

interface SliderState {
  slide: number;
}

const initialState: SliderState = {
  slide: 0,
};

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    setSlide: (state, action) => {
      state.slide = action.payload;
    },
  },
});

export const { setSlide } = sliderSlice.actions;

export default sliderSlice.reducer;

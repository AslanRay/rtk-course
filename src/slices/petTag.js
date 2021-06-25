import { createSlice } from '@reduxjs/toolkit';

export const petTagSlice = createSlice({
  name: 'petTag',
  initialState: {
    petName: '',
    petTag: '',
    isLoadingData: false,
    isError: false,
    isPostOk: false,
    petsTag: [],
  },
  reducers: {
    setPetName: (state, action) => ({
      ...state,
      petName: action.payload.petName,
    }),
    setPetTag: (state, action) => ({
      ...state,
      petTag: action.payload.petTag,
    }),
  },
});

export const { setPetName, setPetTag } = petTagSlice.actions;

export default petTagSlice.reducer;

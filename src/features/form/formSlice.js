import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    email: '',
    dob: '',
    contact: '',
    isFormValid: false,
  },
  reducers: {
    setName: (state, action) => { state.name = action.payload;
      state.isFormValid = state.name.trim() !== '' && state.email.trim() !== '';},
    setEmail: (state, action) => {
      state.email = action.payload;
      state.isFormValid = state.name.trim() !== '' && state.email.trim() !== '';
    },
    setDob: (state, action) => {
      state.dob = action.payload;
    },
    setContact: (state, action) => {
      state.contact = action.payload; },
  },
});

export const { setName, setEmail, setDob, setContact } = formSlice.actions;
export default formSlice.reducer;

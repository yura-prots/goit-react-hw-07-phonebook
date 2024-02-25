import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from '../../redux/operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

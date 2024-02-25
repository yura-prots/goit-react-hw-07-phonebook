import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/operations';

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
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    });
  },
});

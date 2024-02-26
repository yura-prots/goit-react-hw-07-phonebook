import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchContactsBuilder = builder => {
  builder
    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchContacts.rejected, handleRejected);
};

const addContactBuilder = builder => {
  builder
    .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    })
    .addCase(addContact.rejected, handleRejected);
};

const deleteContactBuilder = builder => {
  builder
    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, (state, action) => {
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.isLoading = false;
    })
    .addCase(deleteContact.rejected, handleRejected);
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    fetchContactsBuilder(builder);

    addContactBuilder(builder);

    deleteContactBuilder(builder);
  },
});

import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { fetchContacts, addContact, deleteContact } from './operations';

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

function isPendingAction(action) {
  return action.type.endsWith('pending');
}

const handleRejected = (state, action) => {
  state.isLoading = false;

  if (action.type === fetchContacts.rejected.type) {
    state.error = action.payload;
  }

  toast.remove();
  toast.error('Oops, something went wrong. Try reloading the page.');
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);

        toast.remove();
        toast.success(`${action.payload.name} added to contacts`);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);

        toast.remove();
        toast.success(`${action.payload.name} deleted from contacts`);
      })
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
      })
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);

  return contacts.filter(contact => {
    const contactName = contact.name.toLowerCase().trim();
    const filterName = filter.toLowerCase().trim();

    return contactName.includes(filterName);
  });
};

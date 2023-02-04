export const selectUser= state => state.register.user;
export const selectisLoggedIn =state => state.register.isLoggedIn;
export const selectisRefreshing = state => state.register.isRefreshing;
export const selectContacts = state => state.contacts.contacts;
export const selectisLoading = state => state.contacts.isloading;

export const selectFilter = state => state.filter;

export const selectFilterContact = state => {
    const filter = selectFilter(state);
    const contact = selectContacts(state);
    console.log(contact, 155);
  return contact.filter((i) => {return i.name.toLowerCase().includes(filter.toLowerCase())})
}
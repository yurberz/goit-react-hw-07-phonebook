import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./contacts/contactsReducer";

const store = configureStore({
  reducer: { contacts: contactsReduser },
});

export default store;

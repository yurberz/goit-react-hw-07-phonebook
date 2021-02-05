import axios from "axios";
import contactsActions from "./contactsActions";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const getContacts = () => async (dispatch) => {
  dispatch(contactsActions.getContactsRequest());

  try {
    const { data } = await axios.get("/contacts.json");
    const contacts = Object.keys(data).map((key) => ({
      ...data[key],
      id: key,
    }));
    dispatch(contactsActions.getContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.getContactsError(error));
  }
};

const addContact = (payload) => async (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  try {
    const { data } = await axios.post("/contacts.json", payload);
    dispatch(contactsActions.addContactSuccess({ ...payload, id: data.name }));
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }
};

const delContact = (id) => async (dispatch) => {
  dispatch(contactsActions.delContactRequest());

  try {
    await axios.delete(`/contacts/${id}.json`);
    dispatch(contactsActions.delContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.delContactError(error));
  }
};

export default { getContacts, addContact, delContact };

/*
json server
*/
// axios.defaults.baseURL = "http://localhost:2000";

// const getContacts = () => async (dispatch) => {
//   dispatch(contactsActions.getContactsRequest());

//   try {
//     const { data } = await axios.get("/contacts");
//     dispatch(contactsActions.getContactsSuccess(data));
//   } catch (error) {
//     dispatch(contactsActions.getContactsError(error));
//   }
// };

// const addContact = (payload) => async (dispatch) => {
//   dispatch(contactsActions.addContactRequest());

//   try {
//     const { data } = await axios.post("/contacts", { ...payload });
//     dispatch(contactsActions.addContactSuccess(data));
//   } catch (error) {
//     dispatch(contactsActions.addContactError(error));
//   }
// };

// const delContact = (id) => async (dispatch) => {
//   dispatch(contactsActions.delContactRequest());

//   try {
//     await axios.delete(`/contacts/${id}`);
//     dispatch(contactsActions.delContactSuccess(id));
//   } catch (error) {
//     dispatch(contactsActions.delContactError(error));
//   }
// };

// export default { getContacts, addContact, delContact };

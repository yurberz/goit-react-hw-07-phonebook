import axios from "axios";
import contactsActions from "./contactsActions";

axios.defaults.baseURL = "http://localhost:2000";

const getContacts = () => async (dispatch) => {
  dispatch(contactsActions.getContactsRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(contactsActions.getContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.getContacstError(error));
  }
};

const addContact = (payload) => async (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  try {
    const { data } = await axios.post("/contacts", { ...payload });
    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }
};

const delContact = (id) => async (dispatch) => {
  dispatch(contactsActions.delContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(contactsActions.delContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.delContactError(error));
  }
};

export default { getContacts, addContact, delContact };

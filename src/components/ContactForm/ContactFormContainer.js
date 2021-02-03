import { connect } from "react-redux";
import ContactForm from "./ContactForm";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const mSTP = (state) => {
  return { contacts: contactsSelectors.getContacts(state) };
};

const mDTP = {
  onSubmit: contactsOperations.addContact,
};

export default connect(mSTP, mDTP)(ContactForm);

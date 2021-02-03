import { connect } from "react-redux";
import ContactList from "./ContactList";
import contactsActions from "../../redux/contacts/contactsActions";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const mSTP = (state) => {
  return {
    contacts: contactsSelectors.getVisibleContacts(state),
    value: contactsSelectors.getFilter(state),
  };
};

const mDTP = {
  onDeleteContact: contactsOperations.delContact,
  onChange: contactsActions.changeFilter,
};

export default connect(mSTP, mDTP)(ContactList);

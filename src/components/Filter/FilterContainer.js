import { connect } from "react-redux";
import Filter from "./Filter";
import contactsActions from "../../redux/contacts/contactsActions";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const mSTP = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mDTP = {
  onChange: contactsActions.changeFilter,
};

export default connect(mSTP, mDTP)(Filter);

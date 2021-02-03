import { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import Container from "./AppStyled";
import ContactForm from "./ContactForm/ContactFormContainer";
import ContactList from "./ContactList/ContactListContainer";
import Filter from "./Filter/FilterContainer";
import contactsOperations from "../redux/contacts/contactsOperations";
import contactsSelectors from "../redux/contacts/contactsSelectors";

class App extends Component {
  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    return (
      <Container>
        {this.props.isLoadingContacts && <p className="loading">Loading...</p>}

        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="h1"
          unmountOnExit
        >
          <h1 className="h1Title">Phonebook</h1>
        </CSSTransition>

        <ContactForm />
        <h2 className="h2Title">Contacts</h2>

        <CSSTransition
          in={this.props.contacts.length > 1}
          classNames="filterScale"
          timeout={250}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        {!this.props.isError && <ContactList />}

        {this.props.isError && (
          <p className="error">ERR! Something went wrong...</p>
        )}

        {!this.props.isLoadingContacts &&
          !this.props.isError &&
          !this.props.contacts.length && (
            <p className="text">Your phonebook is empty. Please add contact.</p>
          )}
      </Container>
    );
  }
}

const mSTP = (state) => {
  return {
    contacts: contactsSelectors.getContacts(state),
    isLoadingContacts: contactsSelectors.getLoading(state),
    isError: contactsSelectors.getError(state),
  };
};

const mDTP = {
  onGetContacts: contactsOperations.getContacts,
};

export default connect(mSTP, mDTP)(App);

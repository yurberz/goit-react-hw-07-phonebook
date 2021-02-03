import { CSSTransition, TransitionGroup } from "react-transition-group";
import Div from "./ContactListStyled";

const ContactList = ({ contacts, value, onDeleteContact, onChange }) => {
  const onHandleDelete = (evt) => {
    const { id } = evt.currentTarget;

    onDeleteContact(id);

    if (
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      ).length < 2
    ) {
      onChange("");
    }
  };

  return (
    <Div>
      <TransitionGroup component="ul">
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames="itemFade">
            <li className="contactList__item">
              <p>
                {name}: {number}
              </p>
              <button
                className="delBtn"
                type="button"
                id={id}
                onClick={onHandleDelete}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Div>
  );
};

export default ContactList;

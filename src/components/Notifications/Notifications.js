import Div from "./NotificationsStyled";

export const Empty = () => {
  return (
    <Div>
      <p>Enter the contact's name and(or) phone number!</p>
    </Div>
  );
};

export const ByUsed = () => {
  return (
    <Div>
      <p>Is already in use!</p>
    </Div>
  );
};

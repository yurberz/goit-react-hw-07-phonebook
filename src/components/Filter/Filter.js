import Label from "./FilterStyled";

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input
        className="input"
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.currentTarget.value)}
      />
    </Label>
  );
};

export default Filter;

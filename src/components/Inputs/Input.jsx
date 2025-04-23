import { FormControl } from "./InputStyles";

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <FormControl>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </FormControl>
  );
}

export default Input;

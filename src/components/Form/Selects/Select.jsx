import { FormControl } from "./SelectStyles";
 
function Select({ text, name, options, handleOnChange, value }) {
  return (
    <FormControl>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
      </select>
    </FormControl>
  );
}

export default Select;

import { BtnLink } from "./LinkButtonStyles";

function LinkButton({ to, text }) {
  return <BtnLink to={to}>{text}</BtnLink>;
}

export default LinkButton;

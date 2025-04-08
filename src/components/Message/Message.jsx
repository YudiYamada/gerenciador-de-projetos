import { useVisibleMessage } from "../../hooks/useVisibleMessage";
import { MenssageStyled } from "./MessageStyles";

function Message({ type, msg }) {
  const [visible] = useVisibleMessage(true, 3000);

  if (!visible) return null;

  return <MenssageStyled type={type}>{msg}</MenssageStyled>;
}

export default Message;

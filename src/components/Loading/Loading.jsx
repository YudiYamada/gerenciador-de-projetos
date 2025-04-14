import { LoaderContainer } from "./LoadingStyles";
import loading from "../../assets/img/loading.svg";

function Loading() {
  return (
    <LoaderContainer>
      <img src={loading} alt="Loading" />
    </LoaderContainer>
  );
}

export default Loading;

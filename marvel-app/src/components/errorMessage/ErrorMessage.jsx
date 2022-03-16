import img from "./error.gif";
import "./errorMessage.scss";

function ErrorMessage() {
  return <img className="errormessage" src={img} alt="Character is not found"/>;
}

export default ErrorMessage;

import "../styles/Button.css";
const classNames = require("classnames");

function Button(props) {
  const buttonClass = classNames(
    `button`,
    { "button--login": props.login },
    { "button--signup": props.signup },
    { "button--inputLogin": props.inputLogin },
    { "button--inputSignup": props.inputSignup }
  );

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;

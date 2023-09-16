import "../styles/Button.css";
const classNames = require("classnames");

function Button(props) {
  const buttonClass = classNames(
    `button`,
    { "button--login": props.login },
    { "button--signup": props.signup },
    { "button--inputLogin": props.inputLogin },
    { "button--inputSignup": props.inputSignup },
    { "button--addBudget": props.addBudget },
    { "button--edit": props.edit },
    { "button--delete": props.delete },
    { "button--budget": props.budget },
    { "button--addCategory": props.addCategory },
    { "button--addTransaction": props.addTransaction }
  );

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;

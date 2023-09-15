import "../styles/Button.css";
const classNames = require("classnames");

function Button(props) {
  const buttonClass = classNames(`button`);

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;

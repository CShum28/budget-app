const classNames = require("classnames");

function Button(props) {
  const buttonClass = classNames({
    // btn,
  });

  return <button className={buttonClass}>{props.children}</button>;
}

export default Button;

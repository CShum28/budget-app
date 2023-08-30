const Button = require("./Button");

function BudgetListItem(props) {
  return (
    <>
      <span>
        <p>{props.name}</p>
      </span>
    </>
  );
}

export default BudgetListItem;

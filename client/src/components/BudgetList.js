import BudgetListItem from "./BudgetListItem";

function BudgetList(props) {
  const budgetList = props.budgetList.map((budget) => {
    return (
      <div>
        <BudgetListItem
          key={budget.id}
          name={budget.budget_name}
          amount={budget.monthly_income}
        />
      </div>
    );
  });

  return <div>{budgetList}</div>;
}

export default BudgetList;

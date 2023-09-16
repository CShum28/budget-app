import Button from "./Button";
import "../styles/BudgetListItems.css";

function BudgetListItem({
  budget,
  visitBudget,
  toggleEditModal,
  toggleDeleteModal,
}) {
  return (
    <>
      <tr className="budgetListItems">
        <td>
          <Button budget onClick={() => visitBudget(budget)}>
            {budget.budget_name}
          </Button>
        </td>
        <td>${budget.monthly_income}</td>
        <td>
          <Button edit onClick={() => toggleEditModal(budget)}>
            Edit
          </Button>
          <Button delete onClick={() => toggleDeleteModal(budget)}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}
// test
export default BudgetListItem;

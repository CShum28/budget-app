import Button from "./Button";

function BudgetListItem({
  budget,
  visitBudget,
  toggleEditModal,
  toggleDeleteModal,
}) {
  return (
    <>
      <tr>
        <td>
          <Button onClick={() => visitBudget(budget)}>
            {budget.budget_name}
          </Button>
        </td>
        <td>{budget.monthly_income}</td>
        <td>
          <Button onClick={() => toggleEditModal(budget)}>Edit</Button>
          <Button onClick={() => toggleDeleteModal(budget)}>Delete</Button>
        </td>
      </tr>
    </>
  );
}
// test
export default BudgetListItem;

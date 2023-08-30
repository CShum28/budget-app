import axios from "axios";

function deleteBudget(budget) {
  const userId = budget.user_id;
  const budgetId = budget.id;
  console.log("User Id: ", budget.user_id);
  console.log("Budget Id: ", budget.id);
  return axios
    .delete("http://localhost:5000/delete-budget", {
      data: { userId, budgetId },
    })
    .catch((error) => {
      console.error("Error deleting budget:", error);
    });
}

export default deleteBudget;

import axios from "axios";

function updateBudget(userId, budgetId, name, budget) {
  console.log("updating budget...");
  console.log(userId);
  console.log(budgetId);
  console.log(name);
  console.log(budget);

  return axios.put("http://localhost:5000/update-budget", {
    userId,
    budgetId,
    name,
    budget,
  });
}

export default updateBudget;

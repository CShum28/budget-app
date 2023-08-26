import axios from "axios";

function addBudget(userEmail, budgetName, budgetAmount, startDate, endDate) {
  return axios
    .post("http://localhost:5000/add-budget", {
      userEmail,
      budgetName,
      budgetAmount,
      startDate,
      endDate,
    })
    .then((res) => {
      console.log(res);
      return res.data;
    });
}

export default addBudget;

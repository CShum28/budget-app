import axios from "axios";

function addBudget(userEmail, budgetName, budgetAmount) {
  return axios
    .post("http://localhost:5000/add-budget", {
      userEmail,
      budgetName,
      budgetAmount,
    })
    .then((res) => {
      console.log(res);
      return res.data;
    });
}

export default addBudget;

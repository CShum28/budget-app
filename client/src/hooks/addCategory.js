import axios from "axios";

function addCategory(budgetId, category, amount) {
  return axios
    .post("http://localhost:5000/add-category", { budgetId, category, amount })
    .then((res) => {
      console.log(res);
      return res;
    });
}

export default addCategory;

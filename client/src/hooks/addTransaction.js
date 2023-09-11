import axios from "axios";

function addTransaction(
  categoryId,
  budgetId,
  transaction,
  amount,
  transactionDate
) {
  console.log("budgetId is: ", budgetId);
  console.log("categoryId is: ", categoryId);

  return axios
    .post("http://localhost:5000/add-transaction", {
      categoryId,
      budgetId,
      transaction,
      amount,
      transactionDate,
    })
    .then((res) => {
      console.log(res);
      return res;
    });
}

export default addTransaction;

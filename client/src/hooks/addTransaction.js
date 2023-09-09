import axios from "axios";

function addTransaction(categoryId, transaction, amount, transactionDate) {
  return axios
    .post("http://localhost:5000/add-transaction", {
      categoryId,
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

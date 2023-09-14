import axios from "axios";

function updateTransaction(transactionId, transactionName, amount, date) {
  return axios.put("http://localhost:5000/update-transaction", {
    transactionId,
    transactionName,
    amount,
    date,
  });
}

export default updateTransaction;

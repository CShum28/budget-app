import axios from "axios";

const deleteTransaction = (categoryId, transaction) => {
  const transactionId = transaction.id;
  return axios
    .delete("http://localhost:5000/delete-transaction", {
      data: { categoryId, transactionId },
    })
    .catch((error) => {
      console.log("Error deleting transaction: ", error);
    });
};

export default deleteTransaction;

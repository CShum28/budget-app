import { format } from "date-fns";
import Button from "./Button";

function TransactionListItem({ transaction, toggleDeleteModal }) {
  const formattedDate = format(new Date(transaction.date), "EEE, MMM dd, yyyy");

  return (
    <>
      <tr>
        <td>{transaction.transaction_name}</td>
        <td>${transaction.amount}</td>
        <td>{formattedDate}</td>
        <td>
          <Button>Edit</Button>
          <Button onClick={() => toggleDeleteModal(transaction)}>Delete</Button>
        </td>
      </tr>
    </>
  );
}

export default TransactionListItem;

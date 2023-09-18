import { format } from "date-fns";
import Button from "./Button";
import "../styles/TransactionListItem.css";

function TransactionListItem({
  transaction,
  toggleEditModal,
  toggleDeleteModal,
}) {
  const formattedDate = format(new Date(transaction.date), "EEE, MMM dd, yyyy");

  return (
    <>
      <tr className="transactionListItem">
        <td>{transaction.transaction_name}</td>
        <td>${transaction.amount}</td>
        <td>{formattedDate}</td>
        <td>
          <Button edit onClick={() => toggleEditModal(transaction)}>
            Edit
          </Button>
          <Button delete onClick={() => toggleDeleteModal(transaction)}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}

export default TransactionListItem;

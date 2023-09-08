import Button from "./Button";
import "../styles/DeleteModal.css";

function DeleteModal(props) {
  return (
    <>
      <div className="modal overlay">
        <p>Are you sure you want to delete?</p>
        <Button onClick={props.confirmDelete}>Delete</Button>
        <Button onClick={props.toggleModal}>Cancel</Button>
      </div>
    </>
  );
}

export default DeleteModal;

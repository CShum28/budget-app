import Button from "./Button";
import "../styles/DeleteModal.css";

function DeleteModal(props) {
  return (
    <>
      <div className="delete modal overlay">
        <p>Are you sure you want to delete?</p>
        <div>
          <Button delete onClick={props.confirmDelete}>
            Delete
          </Button>
          <Button cancel onClick={props.toggleModal}>
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;

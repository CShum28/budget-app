import { useState } from "react";
import Button from "./Button";

function CategoriesListItem({ category, toggleEditModal, toggleDeleteModal }) {
  const [modal, setModal] = useState(false);

  const showTransactions = () => {
    setModal(!modal);
  };

  console.log("##: ", category);

  return (
    <div>
      <p onClick={showTransactions}>
        {category.category} {category.max_limit}
      </p>

      {modal && (
        <>
          <Button onClick={() => toggleEditModal(category)}>Edit</Button>
          <Button onClick={() => toggleDeleteModal(category)}>Delete</Button>
          <p>This is a test</p>
        </>
      )}
    </div>
  );
}

export default CategoriesListItem;

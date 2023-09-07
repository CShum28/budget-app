import { useState } from "react";
import Button from "./Button";
import DeleteModal from "./DeleteModal";

function CategoriesListItem({ category }) {
  const [modal, setModal] = useState(false);

  const showTransactions = () => {
    setModal(!modal);
  };

  return (
    <div>
      <p onClick={showTransactions}>
        {category.category} {category.max_limit}
      </p>

      {modal && (
        <>
          <Button>Edit</Button>
          <Button>Delete</Button>
          <p>This is a test</p>
        </>
      )}
    </div>
  );
}

export default CategoriesListItem;

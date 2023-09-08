import { useState } from "react";
import CategoriesListItem from "./CategoriesListItem";
import DeleteModal from "./DeleteModal";
import EditCategoryModal from "./EditCategoryModal";
import deleteCategory from "../hooks/deleteCategory";

function CategoriesList({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const toggleEditModal = (category) => {
    setSelectedCategory(category); // sets the category once modal is toggled true
    setEditModal(!editModal);
  };

  // this opens and closes the delete modal
  const toggleDeleteModal = (category) => {
    setSelectedCategory(category); // sets the category once modal is toggled true
    setDeleteModal(!deleteModal);
  };

  // deletes category and then refreshes page
  const confirmDelete = () => {
    console.log("deleting...");
    deleteCategory(selectedCategory);
    window.location.reload(false); // refreshes the page
  };

  // this turns the modal on and off
  if (deleteModal || editModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  console.log("Current select category: ", selectedCategory);

  const categoryList = categories.map((category) => {
    return (
      <CategoriesListItem
        key={category.id}
        category={category}
        toggleEditModal={toggleEditModal}
        toggleDeleteModal={toggleDeleteModal}
      />
    );
  });

  return (
    <>
      <p>{categoryList}</p>
      {deleteModal && (
        <DeleteModal
          confirmDelete={confirmDelete}
          toggleModal={toggleDeleteModal}
        />
      )}
      {editModal && (
        <EditCategoryModal
          selectedCategory={selectedCategory}
          toggleModal={toggleEditModal}
        />
      )}
    </>
  );
}

export default CategoriesList;

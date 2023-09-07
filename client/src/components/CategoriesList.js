import { useState } from "react";
import CategoriesListItem from "./CategoriesListItem";

function CategoriesList({ categories }) {
  console.log(categories);

  const categoryList = categories.map((category) => {
    console.log(category);
    return <CategoriesListItem key={category.id} category={category} />;
  });

  return (
    <>
      <p>{categoryList}</p>
    </>
  );
}

export default CategoriesList;

import React from "react";
import Header from "../components/Header";
import ProductSingle from "../components/ProductSingle";

function ProductView({ id, title, price, description, category, image }) {
  return (
    <div>
      <Header />
      <ProductSingle
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
      />
    </div>
  );
}

export default ProductView;

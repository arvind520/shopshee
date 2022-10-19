import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, description } = product;
    return (
        <div className="card" key={id}>
          <span className="card--price">{`$ ${price}`}</span>
          <img src={image} alt="" />
          <div className="card--title">{title.length < 35 ? title : `${title.slice(0,35)}...`}</div>
          <div className="card--description">{description.length < 70 ? description : `${description.slice(0,70)}...`}</div>
          <Link to={`/product/${id}`}><button className="button-1">More Details</button></Link>
        </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
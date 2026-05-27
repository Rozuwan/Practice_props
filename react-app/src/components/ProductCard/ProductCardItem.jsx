const ProductCardItem = ({ image, title, description, price, buttonText }) => {
  return (
    <>
      <div className="product-card">
        <div className="product-image">
          <img src={image} alt={title} />
        </div>
        <div className="product-content">
          <h2>{title}</h2>
          <p>{description}</p>
        <div className="product-footer">
          <span>{price}</span>
          <button>{buttonText}</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProductCardItem;

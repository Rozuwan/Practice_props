import { productData } from "../../services/api";
import ProductCardItem from "./ProductCardItem";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-cards">
      {productData.map((item)=>(
        <ProductCardItem key={item.id}
        image={item.image}
        title={item.title}
        description={item.title}
        price={item.price}
        buttonText={item.buttonText}
        />
      ))}
    </div>
  );
};

export default ProductCard;

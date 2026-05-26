import PricingItem from "./PricingItem";
import { priceCard } from "../../services/api";
import "./Pricing.css";
const Pricing = () => {
  return (
    <>
      <div className="pricing">
        <div className="pricing-wrapper">
          {priceCard.map((item)=>(   
            <PricingItem
            key={item.id}
            image={item.image}
              title={item.title}
              info={item.info}
             />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;

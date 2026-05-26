import './Pricing.css'

const PricingItem = ({image,title,info}) => {
  return (
    <>
    {(image || title || info) && (
      <div className="pricing-item">
       {image && <img src={image} alt={title} />}
        {title && <h2>{title}</h2>}
        {info && <p>{info}</p>}
      </div>
    )
}
    </>
  )
}

export default PricingItem

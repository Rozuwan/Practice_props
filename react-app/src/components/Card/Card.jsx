import './Card.css'
import CardItems from '../Card/CardItems'
import { cardData } from '../../services/api'
const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card-wrapper">
           {cardData.map((item)=>(
            <CardItems 
            key={item}
            title={item.title}
            description={item.description}
            />
           ))}
        </div>
      </div>
    </>
  ) 
}

export default Card

import "./Card.css";
const CardItems = ({ title, description }) => {
  return (
    <>
      {(title || description) && (
        <div className="card-item">
          {title && <h2>{title}</h2>}
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CardItems;

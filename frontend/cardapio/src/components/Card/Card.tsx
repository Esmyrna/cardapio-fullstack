import './Card.css'

interface CardProps {
    price: number,
    title: string,
    image: string
}

const Card: React.FC<CardProps>= ({price, title, image}) => {

  return (
    <div className="card">
       <img src={image} />
        <h2>{title}</h2>
        <p>{price}</p>
    </div>
  )
}

export default Card
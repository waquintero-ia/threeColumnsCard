import Element from "./Element"
import card from '../data/card.json';

const Card = () => {  
  return(
    <>
      <div className="container w-327 min-h-1326 rounded-[8px] overflow-hidden flex flex-col lg:flex-row lg:w-920 lg:min-h-500">
        {
          card.map(card => (
            <Element 
              key={card.title}
              logo={card.logo}
              title={card.title}
              description={card.description}
              buttom={card.buttom}
              background={card.background}
              textColor={card.textColor}
              alt={card.alt}
            />    
          ))
        }
      </div>
    </>
  )
}

export default Card
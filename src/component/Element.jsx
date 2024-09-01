import PropTypes from "prop-types";

const Element = ({ logo, title, description, buttom, background=['bg-orange', 'bg-blue', 'bg-green'], textColor=['text-orange','text-blue','text-green'], alt }) => {
  
  return(
    <>
      <div className= {`element_container w-full min-h-442 pl-49 pt-48 flex flex-col gap-36.5 ${background} pb-12`}>
        <picture>
          <img src={logo} alt={alt} loading="lazy" decoding="async"/>
        </picture>
        <div className="container_title flex flex-col gap-27">
          <h2 className="uppercase text-40 leading-110 font-bold text-white">
            {title}
          </h2>
          <p className="w-231 font-lexend leading-156 tracking-tight text-white-2 lg:text-15 lg:w-210 lg:tracking-normal lg:leading-170">
            {description}
          </p>
          <a className="w-146 h-48 flex justify-center items-center font-lexend text-15 bg-white rounded-[29px] lg:mt-[55px] hover:bg-transparent hover:border-[2px] focus:bg-transparent focus:border-[2px] active:bg-transparent active:border-[2px] group" tabIndex={0} role="button" href="#">
            <p className={`group-hover:text-white-2 group-focus:text-white-2  group-active:text-white-2 ${textColor}`}>
              {buttom}
            </p> 
          </a>
        </div>
        
      </div>
    </>
  )
}

Element.propTypes = {
  logo: PropTypes.string.isRequired,       
  title: PropTypes.string.isRequired,      
  description: PropTypes.string.isRequired,
  buttom: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired        
}

export default Element
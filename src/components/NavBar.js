import { FaArrowCircleUp } from "react-icons/fa";
import 'animate.css';


export const NavBar = ({ExperienceClick,headerClick,
  homeClick,portfolioClick,contactClick}) => {



  return (
    <div id="about" className="navbar">
        <a href="/" onClick={homeClick}>Inicio</a>
        <a href="/" onClick={headerClick}>Nosotros</a>
        <a href="/" onClick={ExperienceClick}>Nuestra Historia</a>
        <a href="/" onClick={portfolioClick}>Itinerario</a>
        <a href="/" onClick={contactClick}>Boda</a>
        <a href="/" className="animate__animated animate__slideInRight animate__delay-3s	3s" id="arrow" onClick={homeClick}><FaArrowCircleUp/></a>
    </div>
  )
}

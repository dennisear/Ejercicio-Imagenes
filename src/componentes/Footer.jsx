import React from 'react' 
import '../utils/css/Footer.estilos.css';
import Bask from '../utils/images/bask.jpg'

const Footer = () => {
	return(
		<div className="Container_Footer">
		<div className="ContainerText">
		<h1>Basquetbol</h1>
		<p>Se conoce como basquetbol, básquetbol, baloncesto o básquet a un deporte de competición por equipos, cuyo objetivo es insertar el balón con las manos en un cesto elevado. Gana quien haga más anotaciones o "canastas" en el aro del equipo contrario</p>
		</div>
		<div className="ContainerImage">
		<img id="image3" src={Bask} alt="Hola, este es el básquetbol" />
		</div>
		</div>
		);
}
export default Footer 
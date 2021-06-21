import React from 'react'//Importar siempre react//
import '../utils/css/Todo.estilos.css';
import Soccer from '../utils/images/soccer.jpg'

const Todo = () => {
	return(
		<div className="Container_Cabecera">
		<div className="ContainerText">
		<h1>Hola este es el componente de la cabecera</h1>
		<p>Deporte que se practica entre dos equipos de once jugadores que tratan de introducir un balón en la portería del contrario impulsándolo con los pies, la cabeza o cualquier parte del cuerpo excepto las manos y los brazos; en cada equipo hay un portero, que puede tocar el balón con las manos, aunque solamente dentro del área; vence el equipo que logra más goles durante los 90 minutos que dura el encuentro.</p>
		</div>
		<div className="ContainerImage">
		<img id="image1" src={Soccer} alt="Fútbol" />
		</div>
		</div>
		);
} 
export default Todo 
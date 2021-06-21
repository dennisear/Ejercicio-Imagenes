import React from 'react'//Importar siempre react//
import '../utils/css/Cuerpo.estilos.css';
import Baseball from '../utils/images/baseball.jpg'

const Cuerpo = () => {
	return ( 
		<div className="Container_Cuerpo">
		<div className="ContainerText">
		<h1>Béisbol</h1>
		<p>El béisbol, también llamado baseball o pelota base,​ es un deporte de equipo jugado entre dos equipos de nueve jugadores cada uno.El equipo que anote más carreras al cabo de los nueve (9) episodios, llamados innings (o entradas) que dura el encuentro, es el que resulta ganador.</p>
		</div>
		<div className="ContainerImage">
		<img id="image2" src={Baseball} alt="Hola, este es el beisbol" />
		</div>
		</div>
		);
} 
export default Cuerpo 
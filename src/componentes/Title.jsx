import React from 'react'
import '../utils/css/Title.estilos.css';
import {Link} from 'react-router-dom'

const Title = () => {
	return ( 
		<div className="Container_title">
		<h1 id="principalTitle">DEPORTES</h1>
		<div className="Container_botones">
		<Link to="/contact">
		<button className="contact"><h1>Basquetbol</h1></button>
		</Link>
		<Link to="/">
		<button className="home"><h1> Vuelvo al inicio</h1></button>
		</Link>
		</div>
		</div>
		) 
} 
export default Title
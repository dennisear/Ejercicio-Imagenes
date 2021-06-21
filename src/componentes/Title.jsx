import React from 'react'
import '../utils/css/Title.estilos.css';
import {Link} from 'react-router-dom'

const Title = () => {
	return ( 
		<div className="Container_title">
		<h1 id="principalTitle">DEPORTES</h1>
		<Link to="/contact">
		<button> Me voy para contact</button>
		</Link>
		<Link to="/">
		<button> Me voy para Home</button>
		</Link>
		</div>
		) 
} 
export default Title
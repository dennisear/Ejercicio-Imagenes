import {createGlobalStyle} from 'styled-components'

import PrimaryFont from './utils/fonts/MelanieRoselyn.ttf'

const GlobalStyles= createGlobalStyle`
.ContainerText{
	display: flex;
	flex-direction: column;
	width: 50%;
	margin: 10px;
	font-family: Impact;
	font-size: 15px;
}
.ContainerText p{
	font-family:'Melanie';
}
.ContainerImage{
	display: flex;
	width: 50%;
	margin-right: 10px;
	height: 100%;
	justify-content: center;
}
.ContainerImage img{
	width:100%;
	height:auto;
}
/*Fuentes*/
@font-face {
	font-family: 'Melanie';
	src: local('Melanie'), url(${PrimaryFont}) format('ttf');
	font-style: normal;
}
`;

export default GlobalStyles; 
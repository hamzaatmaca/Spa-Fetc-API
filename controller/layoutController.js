import * as Navbar  from '../views/components/navbar/navbar.js';
import * as Home  from '../views/pages/home.js';
import * as Login from '../views/pages/login.js';
import * as Register from '../views/pages/register.js';
import * as Error from '../views/pages/error.js';

export const Layout = (params)=>{
	let root = document.getElementById('root');

	function mainStructure(elem){
		return(

			Navbar.Structure()+ elem
			)
	}

	switch(params.path){
		case '/':
			root.innerHTML= mainStructure(Home.Structure());
			break;
		case '/error':
			root.innerHTML= mainStructure(Error.Structure());
			break;
		case '/register':
			root.innerHTML= mainStructure(Register.Structure());
			break;
		case '/login':
			root.innerHTML= mainStructure(Login.Structure());
			break;
		default:
			root.innerHTML= mainStructure(Home.Structure());

	}
}
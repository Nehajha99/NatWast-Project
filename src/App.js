import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Expenses from './components/pages/Expanses/Expenses';
import Finance  from './components/pages/finance/Finance';
import './App.css';
import Footer from './components/pages/Footer';
import Login from "/home/neha/Desktop/natwest_project/project2/src/components/pages/Loginpage.js";



function App() {
  return (
    <div className='container'>

		<div className='navbar'>
			<Router>
				
				<nav className='buttons'>
				{/* <span><FontAwesomeIcon icon="fa-thin fa-piggy-bank" /></span> */}
				<h1 className='logo'>Finence maneger </h1>
				<Link to="/" className='link'> Home</Link>
				<Link to="/Expenses" className='link'> Expenses </Link>
				<Link to="/Finance" className='link'> Finance </Link>
				<Link to="/Login" className='link'> Login </Link>
				</nav>
			
				<Routes>
					<Route path="/" element={<Home />} exact/>
					<Route path="/Expenses" element={<Expenses />}/>
					<Route path="/Finance" element={<Finance />}/>
					<Route path="/Login" element={<Login />}/>
				</Routes>
			
			</Router>
	  </div>
		{/* <Footer /> */}


  

    </div>
  );
}

export default App;









// import './App.css';
// import Main from './components/Forms/Main'

// function App() {
//   return (<Main />);
// }

// export default App;
import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link, Redirect} from "react-router-dom";
import Home from './components/Home/Home.lazy';
import Login from './components/Login/Login.lazy';
import Register from './components/Register/Register.lazy';
import Dashboard from './components/Dashboard/Dashboard.lazy';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li><Link to="/admin">Dashboard</Link></li>
      </ul>
      <nav className="bg-gray-800 p-2 mt-0 w-full">
        <div className="container mx-auto flex flex-wrap items-center">
		    <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
				<a className="text-white no-underline hover:text-white hover:no-underline" href="#">
					<span className="text-2xl pl-2"><i className="em em-grinning"></i>KISSO</span>
				</a>
            </div>
			<div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
				<ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
				  <li className="mr-3">
					<a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
				  </li>
				  <li className="mr-3">
					<a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
				  </li>
				  <li className="mr-3">
					<a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
				  </li>
					<li className="mr-3">
					<a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
				  </li>
				</ul>
			</div>
      </div>
    </nav> 
      <hr />
      <div className="main-route-place">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Dashboard} />
        <Route path="/register" component={Register} />
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;

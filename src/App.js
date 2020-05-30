import React from 'react';
import { BrowserRouter, Route, Link, Redirect} from "react-router-dom";
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Dashboard from './components/Dashboard/Dashboard.lazy';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <nav className="bg-gray-800 p-2 mt-0 w-full">
        <div className="container mx-auto flex flex-wrap items-center">
		    <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
				<Link className="text-white no-underline hover:text-white hover:no-underline" to="/">
					<span className="text-2xl pl-2"><i className="em em-grinning"></i>KISSO</span>
          </Link>
            </div>
			<div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
				<ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
				  <li className="mr-3">
					<Link className="inline-block py-2 px-4 text-white no-underline" to="/">Home</Link>
				  </li>
				  <li className="mr-3">
					<Link className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" to="/login">Login</Link>
				  </li>
				  <li className="mr-3">
					<Link className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" to="/register">Register</Link>
				  </li>
					<li className="mr-3">
					<PrivateRoute className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" to="/admin">Dashboard</PrivateRoute>
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
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default App;

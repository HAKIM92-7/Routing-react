import React,{Component} from 'react';
import { Link, Route ,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Category from './components/Category';
import Products from './components/Products';
import PrivateRoute from './components/PivateRoute';

import Admin from './components/Admin';
import Login2 from './components/Login2';



function App() {
  
  return (
    
        <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/admin">Admin Area</Link></li>

          </ul>
        </nav>

          <Switch>
          <Route  exact={true} path="/" component={Home}/>
          <Route path="/category" component={Category}/>
          <Route path="/products" component={Products}/>
          <Route path="/login2" component={Login2}/>
          <PrivateRoute  path='/admin' component = {Admin}  />
          
          </Switch>
      </div>
    

  );
}

export default App;

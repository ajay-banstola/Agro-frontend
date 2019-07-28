import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Homepage1 from './Pages/Homepage1/Homepage1';
import Homepage2 from './Pages/Homepage2/Homepage2';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

class App extends Component {
render() {
return (
<Router>
<Route path = "/homepage1" component ={Homepage1}/> 
<Route path = "/login" component = {Login}/>
<Route path = "/signup" component = {Signup}/>
<Route path = "/homepage2" component ={Homepage2}/> 
</Router>
);
}
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

class RouterExample extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li><Link to="/home">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
				
           {this.props.children || <Home/>}
         </div>
      )
   }
}


export default RouterExample;

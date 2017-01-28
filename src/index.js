import tr from "robe-react-ui/lib/assets/tr_TR.json";
console.log(tr);
import React from "react";
import { render } from "react-dom";
import RApplication from "robe-react-ui/lib/Application";
import { ShallowComponent, Application } from "robe-react-commons";
import { Grid } from "react-bootstrap";
import FileType from "./pages/files/FileType";
//import BootstrapApp from "./BootstrapApp";
//import RouterExample from "./routerEx/RouterExample";
/*

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import About from "./routerEx/About";
import Home from "./routerEx/Home";
import Contact from "./routerEx/Contact";
*/

const app = document.getElementById("app");


render(
    (
        <Grid>
            <RApplication language={tr}>
                <h1>File Application</h1>
               
                <FileType />
              
            </RApplication>
        </Grid>
    ),
    app
);

/*
render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {RouterExample}>
       <IndexRoute component = {Home} />   
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
	
), app)*/

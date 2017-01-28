import tr from "robe-react-ui/lib/assets/tr_TR.json";
import React from "react";
import { render } from "react-dom";
import RApplication from "robe-react-ui/lib/Application";
import { ShallowComponent, Application } from "robe-react-commons";
import { Grid } from "react-bootstrap";
import FileType from "./pages/files/FileType";
import FileMime from "./pages/files/FileMime";

const app = document.getElementById("app");

Application.loadI18n(tr);
render(
    (
        <Grid>
            <RApplication language={tr}>
                <h1>File Application</h1>
               
                <FileType />

                <FileMime/>
              
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

import tr from "robe-react-ui/lib/assets/tr_TR.json";
console.log(tr);
import React from "react";
import { render } from "react-dom";
import RApplication from "robe-react-ui/lib/Application";
import { ShallowComponent, Application } from "robe-react-commons";
import { Grid } from "react-bootstrap";
import Todo from "./Todo";
import File from "./pages/files/File";
<<<<<<< HEAD
=======
import FileType from "./pages/files/FileType";
>>>>>>> 13c7b55be125e4127472c0eaabe5316acecf05c3

const app = document.getElementById("app");


render(
    (
        <Grid>
            <RApplication language={tr}>
<<<<<<< HEAD
                <h1>Todo Application</h1>
                <File />
=======
                <h1>File Application</h1>
                <File />
                <FileType />
>>>>>>> 13c7b55be125e4127472c0eaabe5316acecf05c3
            </RApplication>
        </Grid>
    ),
    app
);


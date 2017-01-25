import tr from "robe-react-ui/lib/assets/tr_TR.json";
console.log(tr);
import React from "react";
import { render } from "react-dom";
import RApplication from "robe-react-ui/lib/Application";
import { ShallowComponent, Application } from "robe-react-commons";
import { Grid } from "react-bootstrap";
<<<<<<< HEAD
import File from "./pages/files/File";
=======
import Todo from "./Todo";
import File from "./pages/files/File";
import FileType from "./pages/files/FileType";
>>>>>>> 2593752f1ccff8a40139893d24a17a82555b6666

const app = document.getElementById("app");


render(
    (
        <Grid>
            <RApplication language={tr}>
<<<<<<< HEAD
                <h1>File Application</h1>
                <File />
=======
                <h1>Todo Application</h1>
                <Todo />
                <FileType/>
>>>>>>> 2593752f1ccff8a40139893d24a17a82555b6666
            </RApplication>
        </Grid>
    ),
    app
);


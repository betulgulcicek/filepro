import tr from "robe-react-ui/lib/assets/tr_TR.json";
console.log(tr);
import React from "react";
import { render } from "react-dom";
import RApplication from "robe-react-ui/lib/Application";
import { ShallowComponent, Application } from "robe-react-commons";
import { Grid } from "react-bootstrap";
import Todo from "./Todo";
<<<<<<< HEAD
=======
import File from "./pages/files/File";
import FileType from "./pages/files/FileType";
>>>>>>> 1ea5f50d59efe66f2be9c4c9a7b7d7a2238e874b

const app = document.getElementById("app");


render(
    (
        <Grid>
            <RApplication language={tr}>
<<<<<<< HEAD
                <h1>Todo Application</h1>
                <Todo />
=======
                <h1>File Application</h1>
                <File />
                <FileType />
>>>>>>> 1ea5f50d59efe66f2be9c4c9a7b7d7a2238e874b
            </RApplication>
        </Grid>
    ),
    app
);


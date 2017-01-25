import tr from "robe-react-ui/lib/assets/tr_TR.json";
console.log(tr);
import React from "react";
import { render } from "react-dom";
import RApplication from "robe-react-ui/lib/Application";
import { ShallowComponent, Application } from "robe-react-commons";
import { Grid } from "react-bootstrap";
import File from "./pages/files/File";

const app = document.getElementById("app");


render(
    (
        <Grid>
            <RApplication language={tr}>
                <h1>File Application</h1>
                <File />
            </RApplication>
        </Grid>
    ),
    app
);


import React from "react";
import { ShallowComponent, Store, RemoteEndPoint } from "robe-react-commons";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Well } from "react-bootstrap";

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };


export default class BootstrapApp extends ShallowComponent {

    render() {
        return (
            <div>
                <ButtonToolbar>
                    <Button href="#">Link</Button>
                    <Button>Button</Button>
                </ButtonToolbar>
                <div className="well" style={wellStyles}>
                    <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
                    <Button bsSize="large" block>Block level button</Button>
                </div>
                <ButtonToolbar>
                    {/* Standard button */}
                    <Button>Default</Button>

                    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                    <Button bsStyle="primary">Primary</Button>

                    {/* Indicates a successful or positive action */}
                    <Button bsStyle="success">Success</Button>

                    {/* Contextual button for informational alert messages */}
                    <Button bsStyle="info">Info</Button>

                    {/* Indicates caution should be taken with this action */}
                    <Button bsStyle="warning">Warning</Button>

                    {/* Indicates a dangerous or potentially negative action */}
                    <Button bsStyle="danger">Danger</Button>

                    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
                    <Button bsStyle="link">Link</Button>
                </ButtonToolbar>
            </div>
        );
    }

    add() {
        console.log("ADD");

    }

}


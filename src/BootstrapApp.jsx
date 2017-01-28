import React from "react";
import { ShallowComponent, Store, RemoteEndPoint } from "robe-react-commons";
import { Button, ButtonToolbar, ButtonGroup,
     DropdownButton, MenuItem, Dropdown, 
     Glyphicon, Toggle, Menu, FormControl, Modal  } from "react-bootstrap";
import { Well } from "react-bootstrap";
import ReactDOM from 'react-dom';

/*
const buttonsInstance = (
    <ButtonToolbar>
        <Button bsStyle="primary" bsSize="large" disabled>Primary button</Button>
        <Button bsSize="large" disabled>Button</Button>
    </ButtonToolbar>
);

*/
//ReactDOM.render(buttonsInstance, document.getElementById('app'));

const modalInstance = (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        One fine body...
      </Modal.Body>

      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
);

ReactDOM.render(modalInstance, document.getElementById(''));
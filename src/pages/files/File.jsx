import React from "react";
import { ShallowComponent, Store, RemoteEndPoint } from "robe-react-commons";
import { Button } from "react-bootstrap";
import ModalDataForm from "robe-react-ui/lib/form/ModalDataForm";
import fields from "./DataFormSample.json";


export default class File extends ShallowComponent {

    store;

    constructor(props) {
        super(props);

    this.store = new Store({
            endPoint: new RemoteEndPoint({
                url: "http://127.0.0.1:3000/files",
                idField: "id"
            }),
            idField: "id",
            autoLoad: true
        });

        this.state = {
            store : this.store,
            items: []   
        }
    }

    render() {
        return (
            <div>
                <ModalDataForm
                    ref="detailModal"
                    header="Modal Data Form"
                    show={this.state.show}
                    onSubmit={this.onSubmit}
                    onCancel={this.toggle}
                    fields={fields}
                    validationDisplay={"overlay"}

                    />
            </div>
        );
    }
   
    onSuccess(data) {
        console.log(data);
    }

    onError(error) {
        console.log(error);
    }
    onChange(e) {
        console.log(e);
    }
  
    onSubmit = (item, handlerComplete) => {
        handlerComplete(true);
    }

    toggle = () => {
        this.setState({
            show: !this.state.show
        });
    }
}
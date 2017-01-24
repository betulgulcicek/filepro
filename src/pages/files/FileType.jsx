import React from "react";
import { ShallowComponent, Store, RemoteEndPoint } from "robe-react-commons";
import { Button } from "react-bootstrap";
import SelectInput from "robe-react-ui/lib/inputs/SelectInput";


const langs = [
    {
        key: "doc",
        value: "doc"
    },
    {
        key: "pdf",
        value: "pdf"
    },
    {
        key: "exe",
        value: "exe"
    }
];
export default class FileType extends ShallowComponent {

    store;

    constructor(props: Object) {
        super(props);
       
    

    this.store = new Store({
            endPoint: new RemoteEndPoint({
                url: "http://127.0.0.1:3000/fileType",
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


    render(): Object {
        return (
            <div>
                <SelectInput
                    label="Select Input Single"
                    name="Select"
                    items={langs}
                    textField="value"
                    valueField="key"
                    value={this.state.Select}
                    onChange={this.__handleChange}
                />
            </div>
        );
    }

    __handleChange(e: Object) {
        let state = {};
        let value = e.target.parsedValue !== undefined ? e.target.parsedValue : e.target.value;
        state[e.target.name] = value;
        this.setState(state);
    }
}


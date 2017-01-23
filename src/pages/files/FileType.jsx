import React from "react";
import { ShallowComponent } from "robe-react-commons";
//import FileUploadInput from "robe-react-ui/lib/inputs/upload/FileUploadInput";
import { Button } from "react-bootstrap";
import SelectInput from "robe-react-ui/lib/inputs/SelectInput";


const filesUrl = "http://localhost:3000/fileType";



let props = {
    url: filesUrl,
    upload: {
        type: "PUT"
    },
    info: {
        type: "POST"
    },
    delete: {
        type: "DELETE"
    }
};


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
export default class FileUploadInput extends ShallowComponent {

    constructor(props: Object) {
        super(props);
        this.state = {
        };
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


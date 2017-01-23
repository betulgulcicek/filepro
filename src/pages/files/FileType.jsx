import React from "react";
<<<<<<< HEAD
import ShallowComponent from "robe-react-commons/lib/components/ShallowComponent";
import SelectInput from "robe-react-ui/lib/inputs/SelectInput";

const langs = [
    {
        key: "en",
        value: "English"
    },
    {
        key: "tr",
        value: "Turkish"
    },
    {
        key: "kr",
        value: "Kurdish"
    }
];
export default class FileType extends ShallowComponent {

    constructor(props:Object) {
        super(props);
        this.state = {
            MultiSelect: ["en", "tr"],
            SingleSelect: "tr"
        };
    }

    render():Object {
=======
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
>>>>>>> 13c7b55be125e4127472c0eaabe5316acecf05c3
        return (
            <div>
                <SelectInput
                    label="Select Input Single"
<<<<<<< HEAD
                    name="SingleSelect"
                    items={langs}
                    textField="value"
                    valueField="key"
                    readOnly={true}
                    value={this.state.SingleSelect}
=======
                    name="Select"
                    items={langs}
                    textField="value"
                    valueField="key"
                    value={this.state.Select}
>>>>>>> 13c7b55be125e4127472c0eaabe5316acecf05c3
                    onChange={this.__handleChange}
                />
            </div>
        );
    }

<<<<<<< HEAD
    __handleChange(e:Object) {
=======
    __handleChange(e: Object) {
>>>>>>> 13c7b55be125e4127472c0eaabe5316acecf05c3
        let state = {};
        let value = e.target.parsedValue !== undefined ? e.target.parsedValue : e.target.value;
        state[e.target.name] = value;
        this.setState(state);
    }
<<<<<<< HEAD
}
=======
}

>>>>>>> 13c7b55be125e4127472c0eaabe5316acecf05c3

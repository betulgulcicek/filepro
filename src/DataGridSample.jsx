import React from "react";
import {
    ShallowComponent,
    Store,
    RemoteEndPoint,
    Assertions,
    LocalEndPoint
} from "robe-react-commons";
import { Well } from "react-bootstrap";
import ModalDataForm from "robe-react-ui/lib/form/ModalDataForm";
import DataGrid from "robe-react-ui/lib/datagrid/DataGrid";
import FaIcon from "robe-react-ui/lib/faicon/FaIcon";
import DataGridModel from "./DataGridModel.json";
import { ControlLabel } from "react-bootstrap";


const propsOfFields = {
    job: {
        items: [
            {
                value: "sd",
                text: "Software Developer"
            },
            {
                value: "sa",
                text: "Software Architect"
            }
        ]
    },
    gender: {
        items: [
            {
                value: "male",
                text: "Erkek"
            },
            {
                value: "female",
                text: "Kadın"
            }
        ]
    }
};

export default class DataGridSample extends ShallowComponent {

    static idField = "id";


    store;

    constructor(props) {
        super(props);

        this.store = new Store({
            endPoint: new RemoteEndPoint({
                url: "http://127.0.0.1:3000/data",

                idField: DataGridSample.idField
            }),
            idField: DataGridSample.idField,
            autoLoad: true
        });


        this.state = {

            fields: DataGridModel.fields,
            store: this.store,
            showModal: false,
            items: []
        };
    }

    render(): Object {
        return (
            <span>
                <ControlLabel>DataGrid (CRUD Toolbar)</ControlLabel>
                <DataGrid
                    fields={this.state.fields}
                    propsOfFields={propsOfFields}
                    store={this.state.store}
                    ref="table1"
                    toolbar={[{ name: "create", text: "Add" }, { name: "edit", text: "Edit" }, { name: "delete", text: "Delete" }]}
                    var console={console.log("onceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")}
                    onNewClick={this.__add}
                    var console={console.log("sonraaaaaaaaaaaaaaaaaaaaaaaaaaa")}
                    onEditClick={this.__edit}
                    onDeleteClick={this.__remove}
                    exportButton={true}
                    editable={true}
                    />


                <ModalDataForm
                    show={this.state.showModal}
                    onSubmit={this.__onSave}
                    onCancel={this.__onCancel}
                    defaultValues={this.state.item}
                    fields={this.state.fields}
                    propsOfFields={propsOfFields}
                    />
            </span>
        );
    }

    // ADD
    __add() {

        let empty = {};
       // let index = this.state.items.length;
        //  let newItem = { id: index + 1, value: newItemText };
        //this.state.items.push();

        this.store.create(empty, this.addSuccessCB, this.addErrorCB);

        this.__showModal(empty);
    }

    addSuccessCB(data) {
        console.log(data);
        this.loadData();
    }
    addErrorCB() {
        console.log("add error");
    }


    __edit() {
        let selectedRows = this.refs.table1.getSelectedRows();
        if (!selectedRows || !selectedRows[0]) {
            return;
        }
        this.__showModal(selectedRows[0]);
    }

    __onCancel() {
        this.setState({ showModal: false });
    }

    __onSave(newData: Object, callback: Function) {
        let id = newData[DataGridSample.idField];
        if (Assertions.isNotEmpty(id)) {
            this.state.store.update(newData);
        } else {
            this.state.store.create(newData);
        }
        if (newData) {
            callback(true);
            this.setState({
                showModal: true
            });
        }
    }

    __remove() {
        let selectedRows = this.refs.table1.getSelectedRows();
        this.state.store.delete(selectedRows[0]);
    }

    __showModal(newItem: Object) {
        this.setState({ showModal: true, item: newItem });
    }

    static cellRenderer(idx: number, fields: Array, row: Object) {
        if (fields[idx].visible !== false) {
            return <td key={fields[idx].name}><FaIcon code={"fa-smile-o"} /> {row[fields[idx].name]}</td>;
        }
        return undefined;
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        //read(successCallBack: Function, errorCallback: Function, queryParams: Object)
        this.store.read((data) => {
            this.setState({
                items: data.data
            });
        });
    }

}

import React from "react";
import { ShallowComponent, Store, RemoteEndPoint } from "robe-react-commons";
import { Button } from "react-bootstrap";
import ModalDataForm from "robe-react-ui/lib/form/ModalDataForm";
import DataGrid from "robe-react-ui/lib/datagrid/DataGrid";
import AjaxRequest from "robe-react-commons/lib/connections/AjaxRequest";
import FileTypeModal from "./FileTypeModal.json";
//import Assertions from "robe-react-commons/lib/utils/Assertions";
//import SHA256 from "crypto-js/sha256";

export default class FileType extends ShallowComponent {

    static idField = "id";

    constructor(props: Object) {
        super(props);



        let store = new Store({
            endPoint: new RemoteEndPoint({
                url: "http://127.0.0.1:3000/fileType",

            }),
            idField: File.idField,
            autoLoad: true
        });


        this.state = {
            fields: FileTypeModal.fields,
            store: store,
            showModal: false,
            item: {},
            propsOfFields: {
                id: {
                    items: []
                }
            }
        }
    }




    render(): Object {
        return (
            <div>
                <DataGrid
                    fields={this.state.fields}
                    store={this.state.store}
                    propsOfFields={this.state.propsOfFields}
                    ref={"table"}
                    toolbar={[{ name: "create", text: "Ekle" }, { name: "edit", text: "Düzenle" }, { name: "delete", text: "Sil" }]}
                    onNewClick={this.__add}
                    onEditClick={this.__edit}
                    onDeleteClick={this.__remove}
                    pagination={{ emptyText: "No data.", pageSize: 20 }}
                    modalConfirm={{ header: "Please do not delete me." }}
                    pageSizeButtons={["10", "20", "100"]}
                    refreshable={true}
                    pageable={true}
                    editable={true}
                    />
                <ModalDataForm
                    ref="detailModal"
                    header="File Yönetimi"
                    show={this.state.showModal}
                    propsOfFields={this.state.propsOfFields}
                    fields={this.state.fields}
                //    onSubmit={this.__onSave}
                    onCancel={this.__onCancel}
                    defaultValues={this.state.item}
                    />
            </div>
        );
    }

    __add() {
        let empty = {};
        this.__showModal(empty);
    }

    __edit() {
        let selectedRows = this.refs.table.getSelectedRows();
        if (!selectedRows || !selectedRows[0]) {
            return;
        }
        this.__showModal(selectedRows[0]);
    }

    __onCancel() {
        this.setState({ showModal: false });
    }

    __onSave(newData, callback) {
        let id = newData[User.idField];
        //newData.password = SHA256(newData.password).toString();
        /*try {
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
        catch(isNotUndefined)
        {
            console.log("isNotUndefined");
        }*/

        // this.refs[DataGridSample.tableRef].__readData();
    }

    __remove() {
        let selectedRows = this.refs.table.getSelectedRows();
    }

    __showModal(newItem) {
        this.setState({ showModal: true, item: newItem });
    }

    componentDidMount() {
        let readRequest = new AjaxRequest({
            url: "files",
            type: "GET"
        });
        readRequest.call(undefined, undefined, (response: Object) => {
            let state = {};
            state.propsOfFields = this.state.propsOfFields;
            for (let i = 0; i < response.length; i++) {
                let res = response[i];
                state.propsOfFields.id.items.push({
                    value: res.id,
                    text: res.name
                });
            }
            this.setState(state);
            this.forceUpdate();
        });
    }

    toggle = () => {
        this.setState({
            show: !this.state.show
        });
    }
}
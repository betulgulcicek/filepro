import React from "react";
import { ShallowComponent, Store, RemoteEndPoint } from "robe-react-commons";
import { Button } from "react-bootstrap";
import ModalDataForm from "robe-react-ui/lib/form/ModalDataForm";
import DataGrid from "robe-react-ui/lib/datagrid/DataGrid";
import FileTypeModal from "./FileTypeModal.json";
import Assertions from "robe-react-commons/lib/utils/Assertions";


export default class FileMime extends ShallowComponent {

    static idField = "id";

    constructor(props: Object) {
        super(props);

        let store = new Store({
            endPoint: new RemoteEndPoint({
                url: "http://127.0.0.1:3000/filemime",

            }),
            idField: FileMime.idField,
            autoLoad: true
        });


        this.state = {
            fieldsmime: FileTypeModal.fieldsmime,
            store: store,
            showModal: false,
            item: {}
        }
    }


    render(): Object {
        return (
            <div>
                <DataGrid
                    fields={this.state.fieldsmime}
                    store={this.state.store}
                    ref={"table"}
                    toolbar={[{ name: "create", text: "Ekle" }, { name: "edit", text: "Düzenle" }, { name: "delete", text: "Sil" }]}
                    onNewClick={this.__add}
                    onEditClick={this.__edit}
                    onDeleteClick={this.__remove}
                    pagination={{ emptyText: "No data.", pageSize: 20 }}
                    modalConfirm={{ header: "Please do not delete me." }}
                    pageSizeButtons={["3", "7", "100"]}
                    refreshable={true}
                    pageable={true}
                    editable={true}
                    />
                <ModalDataForm
                    ref="detailModal"
                    header="File Yönetimi"
                    show={this.state.showModal}
                    fields={this.state.fieldsmime}
                    onSubmit={this.__onSave}
                    onCancel={this.__onCancel}
                    defaultValues={this.state.item}
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

    __add() {
        let empty = {};
        this.__showModal(empty);
    }

    __edit() {
        let selectedRows = this.refs.table.getSelectedRows();
        if (!selectedRows || !selectedRows[0]) {
            return;
        }
        let select = selectedRows[0];
        this.__showModal(selectedRows[0]);
    }
    __onCancel() {
        this.setState({ showModal: false });
    }

    __onSave(newData, callback) {
        let selectedRows = this.refs.table.getSelectedRows();
        if (Assertions.isNotEmpty(newData[FileMime.idField])) {
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
        this.refs.table.__readData();
    }

    __remove() {
        let selectedRows = this.refs.table.getSelectedRows();
        console.log(selectedRows);
        this.state.store.delete(selectedRows[0]);
    }

    __showModal(newItem) {
        this.setState({ showModal: true, item: newItem });
    }

}
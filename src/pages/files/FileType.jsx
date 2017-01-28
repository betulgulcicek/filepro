import React from "react";
import { ShallowComponent, Store, RemoteEndPoint } from "robe-react-commons";
import { Button } from "react-bootstrap";
import ModalDataForm from "robe-react-ui/lib/form/ModalDataForm";
import DataGrid from "robe-react-ui/lib/datagrid/DataGrid";
import AjaxRequest from "robe-react-commons/lib/connections/AjaxRequest";
import FileTypeModal from "./FileTypeModal.json";
import Assertions from "robe-react-commons/lib/utils/Assertions";


export default class FileType extends ShallowComponent {

    static idField = "id";

     readRequest = new AjaxRequest({
            url: "http://127.0.0.1:3000/filemime",
            type: "GET"
        });

    constructor(props: Object) {
        super(props);

        let store = new Store({
            endPoint: new RemoteEndPoint({
                url: "http://127.0.0.1:3000/fileType",

            }),
            idField: FileType.idField,
            autoLoad: true
        });


        this.state = {
            fields: FileTypeModal.fields,
            store: store,
            showModal: false,
            item: {},
            propsOfFields: {
                selectInput: {
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
                    pageSizeButtons={["3", "7", "100"]}
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
                    onSubmit={this.__onSave}
                    onCancel={this.__onCancel}
                    defaultValues={this.state.item}
                    />
                
            </div>
        );
    }

     __handleChange(e:Object) {
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
        let select=selectedRows[0];
       // if(!select[FileType.idField])
       // select[FileType.idField]=this.__generateId();
        this.__showModal(selectedRows[0]);
    }

    __generateId(){
        let text="123456789ABCDEFGHLKMJNVPQYUZ";
        let id="";
        for(let i=0;i<32;i++)
        id+=text[Math.floor(Math.random()*25)]; 
        return id;
    }

    __onCancel() {
        this.setState({ showModal: false });
    }

    __onSave(newData, callback) {
        let selectedRows = this.refs.table.getSelectedRows();
        if (Assertions.isNotEmpty(newData[FileType.idField])) {
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

    componentDidMount() {

        this.readRequest.call(undefined, undefined,function (response){
         let state = {};
            state.propsOfFields = this.state.propsOfFields;
            for (let i = 0; i < response.length; i++) {
                let res = response[i];
                state.propsOfFields.selectInput.items.push({ //filetype
                    value: res.value,
                    text: res.name
                });
            }
            this.setState(state);
            this.forceUpdate();
        }.bind(this));
    }

   
}
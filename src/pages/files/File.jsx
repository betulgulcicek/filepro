import React from "react";
import { ShallowComponent, Store, RemoteEndPoint } from "robe-react-commons";
import { Button } from "react-bootstrap";
import { Well } from "react-bootstrap";
import ModalDataForm from "robe-react-ui/lib/form/ModalDataForm";
//import FileTypeModal from "./FileTypeModal.json";
import FileType from "./FileType";

export default class File extends ShallowComponent {


    constructor(props) {
        super(props);

       let store = new Store({
            endPoint: new RemoteEndPoint({
                url: "http://127.0.0.1:3000/files",
                idField: "id"
            }),
            idField: "id",
            autoLoad: true
        });

        this.state = {
            store: store,
            items: []
        }
    }

    render() {
        return (

          
                <div>
                    <Well>
                        <ul>
                            {this.renderItems()}
                        </ul>
                    </Well>
                {/*    <ModalDataForm
                        ref="detailModal"
                        header="Modal Data Form"
                        show={this.state.show}
                        onSubmit={this.onSubmit}
                        onCancel={this.toggle}
                        fields={fields}
                       /* propsOfFields={{
                            files: {
                                remote: remote
                            }
                        }}* /
                        validationDisplay={"overlay"}

                        />
                    <Button onClick={this.toggle}>Add</Button>   */}

                </div>
        );
    }

    renderItems() {
        let items = [];
     //  for (let i = 0; i < this.state.items.length; i++) {
            items.push(<FileType item={this.state.items[0]} onItemChange={this.onItemChange} />);
     //   }
        return items;
    }

    onItemChange(newItem) {
        console.log(newItem);
        let state = this.state;
        for (let i = 0; i < state.items.length; i++) {
            let item = state.items[i];
            if (item.id === newItem.id) {
                item.value = newItem.value;
            }
        }
        this.setState(state);
    }

    componentDidMount() {
        this.store.read((data) => {
            this.setState({
                items: data.data
            });
        });
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

 /*   toggle = () => {
        this.setState({
            show: !this.state.show
        });
    }
    */
}



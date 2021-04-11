import React from 'react'
import CardGeneral from "./CardGeneral";

class ListaTabla extends React.Component {
    constructor(props) {
        super(props);
    }

    entrar(){
        alert("entra al titulo " + this.props.title.titulo);
        alert("contenido: "+ this.props.title.comentario);

        this.props.onResponse(this.props.title);
    }

    render() {
        return(
            <React.Fragment>
                <div>
                    <div>
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action" onClick={this.entrar.bind(this)}> {this.props.title.titulo} </a>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
};

export default ListaTabla;
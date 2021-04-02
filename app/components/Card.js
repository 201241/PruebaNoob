import React from 'react'
import APIInvoker from "../utils/APIInvoker";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    EliminarPub(){
        let pub = {}
        let idPublicacion = JSON.stringify(this.props.Id_publicacion);
        console.log(idPublicacion);

        APIInvoker.invokeDELETE(`/publicar/deletePublicacion/${idPublicacion}`,pub,data=>{
            //alert(data.message)
        }, error => {
            alert(error.message )
        })
        window.location.replace('');
        /*
        window.location.href = window.location.href;
        // or
        window.location.replace('');
         */
    }

    render(){
        return (
            <React.Fragment>
                <div className="modal-dialog ">
                    <link rel="stylesheet" href="./CSS/Card.css"/>
                    <div className="col-sm-12">
                        <div className="modal-content border-0 ">
                            <div className="col-12">
                                <div className="card tarjeta">
                                    <h5 className="card-header text-center fondoheader">{this.props.title}</h5>

                                    <button type="button" className="btn btn-danger" onClick={this.EliminarPub.bind(this)}>Eliminar</button>

                                    <div className="card-body">
                                        <p className="card-text letras">{this.props.description}</p>
                                        <p className="card-text"><small className="text-muted"></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
};

export default Card;

/*<div className="row row-cols-1 row-cols-md-2 g-4 my-0">
    <div className="col">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.description}</p>
            </div>
        </div>
    </div>
</div>*/
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
        //window.location.replace('');
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

                                    <h5 className="card-header text-center fondoheader">{this.props.title} <div className="container-fluid belim">
                                        <button type="button" className="btn btn-outline-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar publicacion" onClick={this.EliminarPub.bind(this)}>X</button>
                                    </div></h5>

                                    <If condition={this.props.doc}>
                                        <img src={'http://localhost:3000'+this.props.doc} className="card-img-top" />
                                    </If>
                                    <If condition={this.props.doc === null}>
                                        <img src={'http://localhost:3000/uploads/predeterminado.jpg'} className="card-img-top" />
                                    </If>

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

/*<div className="modal-dialog ">
                    <link rel="stylesheet" href="./CSS/Card.css"/>
                    <div className="col-sm-12">
                        <div className="modal-content border-0 ">
                            <div className="col-12">
                                <div className="card tarjeta">

                                    <h5 className="card-header text-center fondoheader">Featured <div className="container-fluid belim">
                                        <button type="button" className="btn btn-outline-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar publicacion">X</button>
                                    </div></h5>
                                    <div className="card-body">
                                        <p className="card-text letras">With supporting text below as a natural lead-in to additional
                                            content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/
import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import Home from "./Home";
import {Link} from "react-router-dom";
import Header from "../components/Header";

class Publicar extends React.Component {

    constructor() {//
        super()
        this.state  = {
            seccion:'',
            titulo : '',
            comentario : '',
            doc : ''
        }
        this.status = false
        this.usernameOk = false


    }

    changeField(e) {
        this.setState({
            seccion: e.target.value

        })
    }

    changeField_(e){
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))

    }

    Publicar(e){
        this.messageError.innerHTML = ''
        let idUserP = window.localStorage.getItem("idUser");
            let publicar = {
                idUser: idUserP,
                seccion: this.state.seccion,
                titulo: this.state.titulo,
                comentario: this.state.comentario,
                doc: this.state.doc
            }

            APIInvoker.invokePOST('/publicar/addPublicacion',publicar,data=>{
                alert(data.message)
                this.usernameOk = false
            }, error => {
                alert(error.message + error.error)
            })

        e.preventDefault()
    }

    render(){
        return (
            <div className="container-fluid text-center">
                <link rel="stylesheet" href="./CSS/Publicar.css"/>
                <header>
                    <Header/>
                </header><br/><br/>

                <div className="modal-dialog text-center">
                    <div className="col-sm-14">
                        <div className="modal-content ">
                            <div className="col-12 text-center">
                                <h1>Realiza una publicación</h1><br/><br/>
                                <div>
                                    <input type='text' className="text-center titulo"
                                           id='titulo'
                                           name='titulo'
                                           placeholder='Añade un título'
                                           value={this.state.titulo}
                                           onChange={this.changeField_.bind(this)}/>
                                    <label ref={self => this.titulo = self}></label>
                                </div><br/><br/>
                                <form onSubmit={this.Publicar.bind(this)}>
                                    <div>
                                        <select class="custom-select seccion"  name="seccion" id="seccion" value={this.state.seccion} onChange={this.changeField.bind(this)}>
                                            <option selected>Elige una sección</option>
                                            <option value="programacion web">programacion web</option>
                                            <option value="base de datos">Base de Datos</option>
                                            <option value="diseño">Diseño de interfaces</option>
                                            <option value="matematicas">Matemáticas</option>
                                        </select>
                                        <label ref={self=> this.idrRol = self}></label>
                                    </div><br/><br/>

                                    <div className="form-floating text-center">
                                        <textarea type='text'
                                                  id='comentario'
                                                  name='comentario'
                                                  placeholder='comentario'
                                                  value={this.state.comentario} onChange={this.changeField_.bind(this)}
                                                  className="form-control area"
                                                  placeholder="Añade un comentario"
                                                  id="comentario"
                                                  rows="4" >
                                        </textarea>
                                    </div><br/>
                                    <div className="custom-file buscar">
                                        <input type="file" className="custom-file-input" id="customFileLang" lang="es"/>
                                        <label className="custom-file-label" htmlFor="customFileLang">Seleccionar Archivo</label>
                                    </div><br/><br/>
                                    <button type="button" className="btn btn-outline-success"onClick={this.Publicar.bind(this)}>Subir publicacion</button>
                                    <div ref={self => this.messageError = self}></div><br/><br/>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Publicar;
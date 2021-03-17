import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import Home from "./Home";
import {Link} from "react-router-dom";

class Publicar extends React.Component {

    constructor() {//
        super()
        this.state  = {
            seccion:'programacion web',
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

            let publicar = {
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
                    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark  fixed-top">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" >
                            <ul className="navbar-nav mr-auto">
                                <Link to='/Home'>
                                    <li className="nav-item active">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                             className="bi bi-house-door-fill casa" viewBox="0 0 16 16">
                                            <path
                                                d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                                        </svg>
                                    </li>
                                </Link>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Publicar<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Temas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Títulos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Libros</a>
                                </li>


                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <button  className="btn btn-outline-light my-2 my-sm-0" type="submit">Mi contenido</button> <p>"</p>
                                <Link to='/DatosUsuario'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-person-circle hola" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path fill-rule="evenodd"
                                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                </Link>

                            </form>
                        </div>
                    </nav>
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
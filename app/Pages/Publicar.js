import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import Home from "./Home";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Publicar extends React.Component {

    constructor(props) {//
        super(props)
        this.state  = {
            seccion:null,
            titulo :null,
            comentario :null,
            doc : null
        }
        this.status = false
        this.usernameOk = false
    }

    changeField(e) {
        let field = e.target.name
        let value = e.target.value
        let type = e.target.type

        if(type === 'file')
            this.setState(update(this.state,{
                doc : {$set : e.target.files[0]}
            }))
        else
            this.setState(update(this.state,{
            [field] : {$set : value}
            }))
    }

    changeField2(e) {
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
        e.preventDefault()
        const data = new FormData();
        let idUserP = window.localStorage.getItem("idUser");
        data.append('idUser', idUserP)
        data.append('seccion', this.state.seccion)
        data.append('titulo', this.state.titulo)
        data.append('comentario', this.state.comentario)
        data.append('doc', this.state.doc);

        this.messageError.innerHTML = ''

            APIInvoker.invokePOSTimg('/publicar/addPublicacion',data,data=>{
                document.getElementById('resultado').innerHTML = 'registro creado exitosamente'
                alert(data.message)
            }, error => {
                document.getElementById('resultado').innerHTML = data
            })

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
                                        <select className="custom-select seccion"  name="seccion" id="seccion" value={this.state.seccion} onChange={this.changeField2.bind(this)}>
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
                                        <input onChange={this.changeField.bind(this)} type="file" className="custom-file-input" id="customFileLang" lang="es"/>
                                        <label className="custom-file-label" htmlFor="customFileLang">Seleccionar Archivo</label>
                                    </div><br/><br/>
                                    <button type="button" className="btn btn-outline-success" onClick={this.Publicar.bind(this)}>Subir publicacion</button>
                                    <div ref={self => this.messageError = self}></div><br/><br/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>

            </div>
        )
    }
}

export default Publicar;
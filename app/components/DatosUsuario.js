import React from 'react'
import {Link} from "react-router-dom";
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";
class DatosUsuario extends React.Component {

    constructor() {//
        super()
        this.state  = {
            nombre : '',
            apellido : '',
            username : ''
        }


        this.iniciarDatos()

        this.status = false
        this.usernameOk = false
    }


    changeField(e) {
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))
    }

    iniciarDatos(){

        let idUser = window.localStorage.getItem("idUser");
        //alert("si al metodo")
        APIInvoker.invokeGET(`/users/getDatos/${idUser}`,(data) => {
            this.setState({
                nombre: data.body.nombre,
                apellido: data.body.apellidoPaterno,
                username: data.body.username
            })
        }, error => {
            alert("si llega no sirve")
            alert(data.body)
        })

    }

    actualizarDatos(){
        let idUser_ = window.localStorage.getItem("idUser");
        let userUpDate = {
            idUser: idUser_,
            nombre: this.state.nombre,
            apellidoPaterno: this.state.apellidoPaterno,
            username: this.state.username,
            //password: this.state.password
        }
        APIInvoker.invokePUT('/users/update',userUpDate,data=>{
            alert(data.message)
        },err => {
            alert(err.message + err.error)
        })

        e.preventDefault()
    }

    render() {

        return(
            <>
                <div className="modal-dialog text-center">
                    <link rel="stylesheet" href="./CSS/Datos.css"/>
                    <div className="col-sm-12">
                        <div className="modal-content ">
                            <div className="col-12">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                     className="bi bi-pencil-square edit" viewBox="0 0 16 16">
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd"
                                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                            </div><br/>
                            <h1 className="h1 info">Editar mi información</h1><br/><br/>
                            <div className="container-fluid form-group">
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control inpnombre" id='nombre' name='nombre' value={this.state.nombre} onChange={this.changeField.bind(this)} placeholder={this.state.nombre}/>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control inpape" id='apellido' name='apellido' value={this.state.apellido} onChange={this.changeField.bind(this)} placeholder={this.state.apellido}/>
                                    </div><br/>

                                </div>
                            </div><br/><br/>
                            <div className="container-fluid form-group">
                                <div className="row">
                                    <div className="col">
                                        <input type="text" class="form-control inpcorreo" id='username' name='username' value={this.state.username} placeholder={this.state.username} onChange={this.changeField.bind(this)}/>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control inpcontra" placeholder="Nueva contraseña"/>
                                    </div><br/>

                                </div>
                            </div><br/><br/>
                            <div className="container-fluid ">
                                <button type="button" className="btn btn-outline-info" onClick={this.actualizarDatos.bind(this)} >Guardar cambios</button>
                            </div><br/>
                            <Link to='/home'>
                                <div className="container-fluid ">
                                    <button type="button" className="btn btn-outline-danger">Cancelar</button>
                                </div>
                            </Link>

                            <br/>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
export default DatosUsuario;




/*APIInvoker.invokeGET(`/user/getDatos/${userId}`,data=>{
            this.setState({
                nombre : data.nombre,
                apellido : data.apellidoPaterno,
                username : data.username
            })
            alert(data.datos)
        }, error => {
            alert(error.message )
        })*/
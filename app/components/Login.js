import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";
import {Link} from "react-router-dom";

class Login extends React.Component{
    constructor() {//
        super();
        this.state = {
            username:'',
            password:''
        }
    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    usernameValidate(e){
        let username = this.state.username
        APIInvoker.invokeGET(`/users/usernameValidate/${username}`,
            data => {
                //Primera forma de obtener la referencia de un control en el DOM
                //let label = document.getElementById('usernameMessage')
                this.label.innerHTML = ''
            },
            error => {
                //let label = document.getElementById('usernameMessage')
                this.label.innerHTML = 'Cuenta inexistente'
            })
    }

    iniciarSesion(e){
        let user = {
            username: this.state.username,
            password: this.state.password
        }

        APIInvoker.invokePOST('/users/login',user,data => {
            alert(JSON.stringify(data))
            window.localStorage.setItem('token',data.token)
            window.localStorage.setItem('idUser',data.idUser)
            this.props.history.push('/Home')
        }, error =>{
            this.pass.innerHTML = error.message
        })
    }

    render() {
        return(
                <div class="container-fluid text-center">
                    <link rel="stylesheet" href="./CSS/Login.css"/>
                    <div class="modal-dialog">
                        <div class="col-sm-12">
                            <div class="modal-content prueba">
                                <div class="col-12">
                                    <img src="./Imagenes/3.png"/>
                                </div>
                            </div>
                        </div>
                    </div><br/><br/>

                    <form >
                        <div class="container-fluid form-group">
                            <label class="label lblusuario">Usuario</label>
                            <input type="text" class="inuser "
                                   name="username"
                                   id="username"
                                   placeholder=""
                                   value={this.state.username}
                                   onChange={this.changeField.bind(this)}
                                   onBlur={this.usernameValidate.bind(this)}/>
                            <div className="label-error" ref={ self => this.label = self}></div>
                        </div>
                        <br/>
                        <div class="container-fluid form-group">
                            <label class="label lblpass">Contraseña</label><br/><br/>
                            <input type="password" class="inpass"
                                   name="password"
                                   id="password"
                                   placeholder=""
                                   value={this.state.password}
                                   onChange={this.changeField.bind(this)}/>
                            <div className="label-error" ref={ self => this.pass = self}> </div>
                        </div><br/><br/>
                        <button  type="button" class="btn btn-outline-info" onClick={this.iniciarSesion.bind(this)} >Iniciar sesión</button>
                        <br/><br/><br/><h6>¿No tienes cuenta?</h6><br/>

                        <Link to='/signup'>
                            <button type="button " className="btn btn-outline-primary" >Regístrate</button>
                        </Link>
                    </form>
                </div>
        )
    }
}

export default Login;
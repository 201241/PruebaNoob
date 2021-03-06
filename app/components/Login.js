import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";

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
                this.label.innerHTML = 'La cuenta de usuario no existe'
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
            this.props.history.push('/Home')
        }, error =>{
            this.pass.innerHTML = error.message
        })
    }

    render() {
        return(
                <div>
                    <h1>Inicio de sesión</h1>
                    <form >
                        <div>
                            <label htmlFor="username">Usuario</label>
                            <input type="text"
                                   name="username"
                                   id="username"
                                   placeholder="alilopez"
                                   value={this.state.username}
                                   onChange={this.changeField.bind(this)}
                                   onBlur={this.usernameValidate.bind(this)}/>
                            <div className="label-error" ref={ self => this.label = self}></div>
                        </div>

                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password"
                                   name="password"
                                   id="password"
                                   placeholder="1234"
                                   value={this.state.password}
                                   onChange={this.changeField.bind(this)}/>
                            <div className="label-error" ref={ self => this.pass = self}> </div>
                        </div>
                        <button class="btn btn-primary" type="button" onClick={this.iniciarSesion.bind(this)} >Iniciar sesión</button>

                    </form>
                </div>
        )
    }
}

export default Login;
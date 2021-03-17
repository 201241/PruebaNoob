import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'

class SignUp extends React.Component {

    constructor() {//
        super()
        this.state  = {
            nombre : '',
            apellidoPaterno : '',
            username : '',
            password : ''
        }
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

    validateUsername(e) {
        let username = this.state.username
        if (username) {
            APIInvoker.invokeGET(`/users/usernameValidate/${username}`,data => {
                this.username.innerHTML = '* El nombre de usuario no está disponible'
                this.usernameOk = false
            }, error => {
                this.username.innerHTML = '* El nombre de usuario está disponible'
                this.usernameOk =  true
            })
        } else
            this.usernameOk = false
    }

    crearCuenta(e){
        this.messageError.innerHTML = ''
        //this.validarCampos()

        let user = {
            nombre: this.state.nombre,
            apellidoPaterno: this.state.apellidoPaterno,
            username: this.state.username,
            password: this.state.password
        }
        console.log(user + "<==")
        APIInvoker.invokePOST('/users/signup',user,data=>{
            alert(data.message)
            this.usernameOk = false
        }, error => {
            alert(error.message + error.error)
        })

/*        if (this.status && this.usernameOk) {

        } else
            this.messageError.innerHTML = 'Los campos marcados con * son obligatorios'*/
        e.preventDefault()
    }

    validarCampos(){
        let estado = true;

        if (this.state.idRol.length === 0) {
            this.idrRol.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.idrRol.innerHTML = ''

        if (this.state.nombre.length === 0) {
            this.nombre.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.nombre.innerHTML = ''

        if (this.state.apellidoPaterno.length === 0) {
            this.apellidoPaterno.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.apellidoPaterno.innerHTML = ''

        if (this.state.username.length === 0) {
            this.username.innerHTML = '* Campo obligatorio'
            estado = false;
        }

        if (this.state.password.length === 0) {
            this.password.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.password.innerHTML = ''

        if (estado === false)
            this.status = false
        else
            this.status = true
    }

    render(){
        return (
            <div class="container-fluid text-center">
                <div>
                    <link rel="stylesheet" href="./CSS/Signup.css"/>
                        <div>
                            <img src="./Imagenes/3.png" class="float-left img"/>
                        </div>
                </div><br/><br/><br/>
                <h1>Registro de usuario</h1><br/><br/>
                <form onSubmit={this.crearCuenta.bind(this)}>
                    <div class="container-fluid form-group">
                        <input type='text' className="inombre"
                               id='nombre'
                               name='nombre'
                               placeholder='Nombre'
                               value={this.state.nombre}
                               onChange={this.changeField.bind(this)}/>
                        <label ref={self=> this.nombre = self}></label>
                    </div><br/>
                    <div class="container-fluid form-group">
                        <input  type='text' class="inapellido"
                                id='apellidoPaterno'
                                name='apellidoPaterno'
                                placeholder='Apellidos'
                                value={this.state.apellidoPaterno}
                                onChange={this.changeField.bind(this)}/>
                        <label ref={self=> this.apellidoPaterno = self}></label>
                    </div><br/>
                    <div class="container-fluid form-group">
                        <input  type='text' class="incorreo"
                                id='username'
                                name='username'
                                placeholder='Dirección de correo'
                                value={this.state.username}
                                ref={self => this.inputUsername = self}
                                onChange={this.changeField.bind(this)}
                                onBlur={this.validateUsername.bind(this)}/>
                        <label ref={self=> this.username = self}></label>
                    </div><br/>

                    <br/>
                    <div class="container-fluid form-group">
                        <input  type='password' class="incontra"
                                id='password'
                                name='password'
                                placeholder='Contraseña'
                                value={this.state.password}
                                onChange={this.changeField.bind(this)}/>
                        <label ref={self=> this.password = self}></label>
                    </div>
                    <div >
                        <button type="button" className="btn btn-outline-info"
                                onClick={this.crearCuenta.bind(this)}>
                            Crear cuenta
                        </button>
                    </div><br/>

                    <div ref={self => this.messageError = self}></div>
                </form>
            </div>
        )
    }
}

export default SignUp;
import React from 'react'
import {Link} from "react-router-dom";
class DatosUsuario extends React.Component {

    constructor() {//
        super()
        this.state  = {
            nombre : '',
            apellido : '',
            username : ''
        }

        var userId = localStorage.getItem('idUser');
        APIInvoker.invokeGET(`/user/getDatos/${userId}`,data=>{
            this.setState({
                nombre : data.nombre,
                apellido : data.apellidoPaterno,
                username : data.username
            })
            alert(data.datos)
        }, error => {
            alert(error.message )
        })
        this.status = false
        this.usernameOk = false
    }


    render() {

        return(
            <>
                hola
            </>

        )
    }
}
//npm install -save bootstrap@4.6.0
export default DatosUsuario;
import React from 'react'
import {Link} from "react-router-dom";
class DatosUsuario extends React.Component {

    constructor() {//
        super()
        this.state  = {
            nombre : '',
            apellido : '',
            matricula : '',
            cuatrimestre: ''
        }

        var userId = localStorage.getItem('idUser');
        APIInvoker.invokeGET(`/user/getDatos/${userId}`,data=>{
            alert(data.message)
        }, error => {
            alert(error.message )
        })

        this.status = false
        this.usernameOk = false
    }





    render() {

        return(
            <>
            </>

        )
    }
}
//npm install -save bootstrap@4.6.0
export default DatosUsuario;
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

        this.status = false
        this.usernameOk = false
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
                                        <input type="text" className="form-control inpnombre" placeholder="Nombre"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control inpape" placeholder="Apellido"/>
                                    </div><br/>

                                </div>
                            </div><br/><br/>
                            <div className="container-fluid form-group">
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control inpcorreo" placeholder="Correo"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control inpcontra" placeholder="Contraseña"/>
                                    </div><br/>

                                </div>
                            </div><br/><br/>
                            <div className="container-fluid ">
                                <button type="button" className="btn btn-outline-info">Guardar cambios</button>
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
import React from 'react'
import {Link} from 'react-router-dom'

class NotFound extends React.Component {
    render() {

        return(
            <>
                <h1> No existe la ruta</h1>
                <Link to={'/'}>
                    <h4>Volver al inicio </h4>
                </Link>

            </>
        )
    }
}

export default NotFound;
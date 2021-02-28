import React from 'react'
import {Link} from 'react-router-dom'

class NotFound extends React.Component {
    render() {

        return(
            <>
                <h1> No existe la ruta</h1>
                <Link to='/'>
                    <h2>Volver al inicio </h2>
                </Link>

            </>
        )
    }
}

export default NotFound;
import React from 'react'
import {Link} from 'react-router-dom'

class NotFound extends React.Component {
    render() {

        return(
            <>
                <body>
                        <img src="Imagenes/NF.jpg" className="img-fluid mx-auto d-block"/>
                        <div className="container-fluid text-center">
                            <Link to='/Home'>
                                <button type="button" className="btn btn-outline-warning ">Regresar</button>
                            </Link>
                        </div>
                </body>

            </>
        )
    }
}
export default NotFound;
import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {

        return(
            <>
                <h1> Bienvenido a la pagina </h1>
                <Link to={'/one'}>
                <h4>Login</h4>
                </Link>

            </>
        )
    }
}

export default Home;
import React from 'react'
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {

        return(
            <>
                <h1> Bienvenido a la pagina inicial</h1>
                <Link to='/login'>
                    <h4>Login</h4>
                </Link>
                <Link to='/signUp'>
                    <h4>SignUp</h4>
                </Link>
            </>
        )
    }
}

export default Home;
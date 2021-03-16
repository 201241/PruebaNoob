import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import Publicar from "../Pages/Publicar";
import ZonaWeb from "../Pages/ZonaWeb";
import DatosUsuario from "./DatosUsuario";
import ZonaBaseDeDatos from "../Pages/ZonaBaseDeDatos";

class App extends React.Component{
    render() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/signUp' component={SignUp}/>
                    <Route exact path='/publicar' component={Publicar}/>
                    <Route exact path='/Home' component={Home}/>
                    <Route exact path='/Zonaweb' component={ZonaWeb}/>
                    <Route exact path='/ZonaBaseDeDatos' component={ZonaBaseDeDatos}/>
                    <Route exact path='/DatosUsuario' component={DatosUsuario}/>
                    <Route component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
            //<SignUp/>
            )
    }
}
/*
<BrowserRouter>
              <Switch>
                  <Router exact path='/' component={Home}/>
                  <Router exact path='/login' component={Login}/>
                  <Router exact path='/signup' component={SignUp}/>
              </Switch>
          </BrowserRouter>
 */
export default App;
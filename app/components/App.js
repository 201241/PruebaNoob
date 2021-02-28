import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import { BrowserRouter, Switch, Router} from 'react-router-dom'
import Home from '../Pages/Home'



class App extends React.Component{
    render() {

        return (
          <BrowserRouter>
              <Switch>
                  <Router exact path='/' component={Home}/>
                  <Router exact path='/login' component={Login}/>
                  <Router exact path='/signup' component={SignUp}/>

              </Switch>
          </BrowserRouter>
            )
    }
}

export default App;
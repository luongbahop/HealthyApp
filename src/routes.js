import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';


/* Import pages */
import Home from './containers/Home';
import About from './containers/About';

import Lauch from './containers/Auth/Lauch';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import ResetPassword from './containers/Auth/ResetPassword';




export default class Routes extends Component {
    render() {
        return <Router>
            <Scene key="root" >
                <Scene key="lauch" title="Lauch"  component={Lauch} initial={true} hideNavBar />
                <Scene key="login" title="Login"  component={Login}  hideNavBar />
                <Scene key="home"  title="Home"  component={Home} hideNavBar />
                <Scene key="about" title="About" component={About}  />
                <Scene key="resetpassword" title="ResetPassword" component={ResetPassword}  />
            </Scene>
        </Router>
    }

}
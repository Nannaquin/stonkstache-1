import { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
//import PrivateRoute from './components/PrivateRoute'; // will create when we actually tackle authentication

import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";  

import './App.css';

class App extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/login" component={LoginPage}/>
                </Switch>
            </Router>
        );
    }
}

export default App;

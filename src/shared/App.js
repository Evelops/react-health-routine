import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from '../pages/Home.js';
import AboutExercise from '../pages/AboutExercise.js';
class App extends Component {
    render(){
        return(
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/AboutExercise" component={AboutExercise} />
            </div>
        );
    }
}
export default App;
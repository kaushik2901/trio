import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import NavBar from './components/NavBar';
import Home from './Home';

class App extends Component {

    setRef = (name, value) => {
        this[name] = value
    }

    render() {
        return (
            <React.Fragment>
                <NavBar scrollRef={this} />
                <Switch>
                    <Route exact path="/" component={() => (<Home setRef={this.setRef} />)} />
                    <Route path="/Search" Component="" />
                    <Route exact path="/Blog" Component="" />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;

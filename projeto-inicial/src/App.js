import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import routesConfig from './routesConfig';
class App extends Component {
  // constructor(props){
  //   super(props)
  // }

  render() {
    return (
      <div>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
        </div>
        {routesConfig.map((value, key) => {
          return <Route
            key={key}
            path={value.path}
            component={value.component}
            exact={value.exact}>
          </Route>
        })}
      </div>
    );
  }
}

export default App;

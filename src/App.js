import React, { Component } from 'react';
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Todo from './component/todo/Todo'
import PostDetails from './component/PostDetails'

class App extends Component {
  state = {
    post_id: null
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          
          <Navbar />
          <Switch>
           
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={Todo} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={PostDetails} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

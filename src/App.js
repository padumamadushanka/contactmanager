import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contact/Contacts';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
import Header from './components/layout/Header';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import Test from './components/test/Test';
import {Provider} from './context'
import {HashRouter as Router ,Route,Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider>
          <Router>
            <div className="App">
            <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
            <Header branding="contact manager"/>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Contacts}></Route>
                  <Route exact path="/contact/add" component={AddContact}></Route>
                  <Route exact path="/contact/edit/:id" component={EditContact}></Route>
                  <Route exact path="/about" component={About}></Route>
                  <Route exact path="/test" component={Test}></Route>
                  <Route component={NotFound}></Route>
                </Switch>
              </div>  
            </div>
        </Router>
      </Provider>
      
    );
  }
}

export default App;

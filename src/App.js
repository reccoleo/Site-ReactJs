import React, {Component} from 'react';
import './estilo.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Localizacao from './components/Localizacao';
import Servicos from './components/Servicos';
import Contato from './components/Contato';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/sobre" component={Sobre}/>
          <Route exact path="/servicos" component={Servicos}/>
          <Route exact path="/localizacao" component={Localizacao}/>
          <Route exact path="/contato" component={Contato}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

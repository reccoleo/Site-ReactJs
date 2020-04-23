import React, {Component} from 'react';
import '../../estilo.css';
import Header from '../Header';
import Figura from '../Figura';
import Figura2 from '../Figura2';
import Motivacao from '../Motivacao';
import Introducao from '../Introducao';
import Introducao2 from '../Introducao2';
import Introducao3 from '../Introducao3';
import Vantagem from '../Vantagem';
import Clientes from '../Clientes';
import Quem from '../Quem';
import Redes from '../Redes';
import Rodape from '../Rodape';

class Home extends Component{
  render(){
    return(
      <div>
        <Header />
        <Figura />
        <Introducao />
        <Quem />
        <Introducao2 />
        <Introducao3 />
        <Vantagem />
        <Motivacao />
        <Figura2 />
        <Clientes />
        <Redes />
        <Rodape />
      </div>
    );
  }
}

export default Home;

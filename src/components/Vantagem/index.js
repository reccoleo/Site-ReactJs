import React, {Component} from 'react';
import Imagem from '../img/task2.png';
import {Link} from 'react-router-dom';

class Vantagem extends Component{
    render(){
        return(
            <div>
                <div class="container-fluid padding vantagem-maior">
                    <div class="row padding">
                        <div class="col-lg-6">
                            <p>
                                <strong>Quantas horas por mês sua equipe desperdiça </strong>
                                com tarefas que nossa empresa pode automatizar em minutos?
                            </p>
                            <br />
                                <Link to="/servicos"><button type="button" class="btn btn-primary btn-lg botao">Descubra todas as Vantagens</button></Link>
                        </div>
                    <div class="col-lg-6 text-center">
                        <img src={Imagem} />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Vantagem;
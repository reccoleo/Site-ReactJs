import React, {Component} from 'react';
import Header from '../Header';
import Rodape2 from '../Rodape2';
import {Link} from 'react-router-dom';

class Servicos extends Component{
    render(){
        return(
            <div>
                <Header />

                <div class="container-fluid"> 
                    <div class="row text-center aprovacao"> 
                        <div class="col-12"> 
                            <h2>Nossos Serviços</h2>
                            <p class="lead">
                                Para contratar os serviços de nossa empresa precisamos definir alguns pontos primeiro.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="container-fluid padding">
            <div class="row text-center padding">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body cartacao">
                            <h4 class="card-title">Variáveis</h4>
                            <p class="card-text">Primeiro precisamos saber a quantidade de imóveis, tempo de contratação, endereço, serviços a serem realizados.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body cartacao">
                            <h4 class="card-title">Orçamento</h4>
                            <p class="card-text">Através das variáveis poderemos realizar um orçamento detalhado de tudo que podemos oferecer à sua empresa.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                      <div class="card-body cartacao">
                            <h4 class="card-title">Aprovação do Cliente</h4>
                            <p class="card-text">Depois de todas as etapas concluídas poderemos dar continuídade e oferecer nossos melhores serviços a você e a sua empresa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

                <div class="container-fluid servicos3"> 
                    <div class="row text-center jumbotron"> 
                        <div class="col-12"> 
                            <h2>Contratação</h2>
                            <p class="lead">
                                A IMOBO.com.br faz o gerenciamento de todos os seus imóveis.
                            </p>
                            <p class="lead">
                                Aluguel - Água - IPTU - Energia
                            </p>
                            <p class="lead">
                                Entre em contato e faça seu orçamento.
                            </p>
                            <Link to="/contato"><button type="button" class="btn btn-primary btn-lg botao3">Entre em Contato!</button></Link>
                            <Link to="/"><button type="button" class="btn btn-primary btn-lg botao3">Home</button></Link>
                        </div>
                    </div>
                </div>


                <Rodape2 />
            </div>
        );
    }
}

export default Servicos;
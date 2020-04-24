import React, {Component} from 'react';
import Header from '../Header';
import Rodape from '../Rodape2';
import {Link} from 'react-router-dom';
import Imagem from '../img/boletim.jpg';

class Sobre extends Component{
    render(){
        return(
            <div>
                <Header />

                <div class="container-fluid padding sobre1">
                    <div class="row welcome text-center">
                        <div class="col-12">  
                            <h1 class="display-4">Estamos aqui para facilitar a Sua Vida!</h1>
                        </div>
                        <hr /> 
                        <div class="col-12">
                            <p class="lead">
                                Somos uma empresa que utiliza tecnologia de ponta
                                para fornecer transparência, agilidade
                                e resultado, gerenciando de forma efetiva os imóveis e 
                                sempre buscando aumentar a eficiência desses mesmos processos.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="container sobre2 ">
                    <div class="row">
                        <div class="col-md-4">
                            
                            <h2>Sobre a Lorem Ipsum</h2>
                           
                            <p>
                                A Lorem Ipsum é uma startup Catarinense
                                que vem se destacando no mercado imobiliário nos 
                                últimos anos.
                            </p>
                            <p>
                                Prestando seus serviços através de uma equipe 
                                treinada e qualificada nas áreas de tecnologia,
                                contabilidade, pessoal e tributária. 
                            </p>
                        </div>
                        <div class="col-md-4">
                            
                            <h2>Missão e Visão</h2>
                           
                            <p>
                               Missão: Gerenciar todos os imóveis com máxima eficiência e agilidade.

                            </p>
                            <p>
                                Visão: Se tornar uma empresa referência na utilização de 
                                robôs para o gerenciamento de imóveis no Brasil. 
                            </p>
                        </div>
                        <div class="col-md-4">
                            
                            <h2>Time</h2>
                           
                            <p>
                               Nosso time é composto por profissionais qualificados em
                               tecnologia e treinados para trabalhar com robôs imobiliários.
                            </p>
                            <p>
                                Os colaboradores da empresa agem como se fosse uma grande 
                                família, sempre com a meta de cooperar para atingir nossos 
                                objetivos.
                            </p>
                        </div>

                        </div>
                    </div>

                <div class="container-fluid padding sobre3">
                    <div class="row text-center padding">
                        <div class="col-lg-6"> 
                                <img src={Imagem} class="img-fluid" />
                        </div>
                        <div class="col-lg-6 ">
                            <h2 class="sobretitulo">Nada Pode Nos Parar Agora!!</h2>
                            <hr />
                            <br />
                            <p class="lead sobretitulo2">
                            A Lorem Ipsum já está consolidada, somente na região da Grande 
                            Florianópolis contamos com mais de 25 mil imóveis gerenciados.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="container-fluid padding sobre4">
                <div class="row text-center padding">
                <div class="col-lg-12">
                    <h2 class="titulo4">Não perca tempo e entre em contato!</h2>
                    
                    <p>
                        <strong>Quantas horas por mês sua equipe desperdiça </strong>
                        com tarefas que nossa empresa pode automatizar em minutos?
                    </p>
                    <br />
                    <p>
                        Você pode ter a resposta ao entrar em contato conosco e descobrir
                        tudo que podemos fazer por você e para seus imóveis, afinal,
                        o tempo não para e tempo é dinheiro!
                    </p>
                    <br />
                    <Link to="/servicos"><a href="#" class="btn btn-primary botao3">Conheça nossos Serviços</a></Link>
                </div>
                </div>
            </div>

                <Rodape />
            </div>
        );
    }
}

export default Sobre;
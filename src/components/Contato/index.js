import React, {Component} from 'react';
import Header from '../Header';
import Rodape2 from '../Rodape2';
import Imagem from '../img/cliente2.png';

class Contato extends Component{
    render(){
        return(
            <div>
                <Header />

                <div class="container-fluid padding contato3">
                <div class="row text-center padding">

                <div class="col-lg-6"> 
                    <img src={Imagem} class="img-fluid"/>
                </div>

                <div class="col-lg-6">
                    <h2>Contato</h2>
                        <br />
                        <p><strong>Fone:</strong>(48) 3067-9453</p>
                        <p><strong>Celular:</strong>9 8820-0833</p>
                        <p><strong>Email:</strong> paulo@projetabrasil.net.br</p>
                </div>
                
            </div>
        </div>

        <div class="container-fluid padding contato2">
            <div class="row text-center padding">
                <div class="col-lg-6 contato4">
                <h2>Atendimento</h2>
                <br />
                        <p>Dias e horários de atendimento ao público externo:</p>
                        <strong>Segunda á Sexta:</strong>
                        <p>09:00 até 12:00 | 13:00 até 18:00</p>
                        <br />
                        <p>Avenida Madre Benvenuta, núm. 1490
                        CEP: 88035-000
                        Florianópolis, SC</p>
                </div>
                    <div class="col-lg-6 contato4"> 
                    <h2>O Futuro está aqui</h2>
                    <br />
                            <p>
                                A IMOBO.com.br é uma startup Catarinense
                                que vem se destacando no mercado imobiliário nos 
                                últimos anos.
                            </p>
                            <p>
                                Prestando seus serviços através de uma equipe 
                                treinada e qualificada nas áreas de tecnologia,
                                contabilidade, pessoal e tributária. 
                            </p>
                    
                    </div>
                </div>
                </div>

            <div class="container-fluid separador">
                <div class="row">

                </div>
            </div>

            <Rodape2 />
        </div>
        );
    }
}

export default Contato;
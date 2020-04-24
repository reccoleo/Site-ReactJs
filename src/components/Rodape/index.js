import React, {Component} from 'react';
import Imagem from '../img/logo2.png';
import '../../estilo.css';

class Rodape extends Component{
    render(){
        return(
            <div>
                <footer>
                <div class="container-fluid padding">
                    <div class="row text-center">
                        <div class="col-md-4">
                            
                            <h4>Sobre</h4>
                           
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
                            <img src={Imagem} />
                        </div>
                        
                    <div class="col-md-4">
                      
                        <h4>Contato</h4>
                       
                        <p>Bairro Lorem Ipsum</p>
                        <p>CEP: 88000-000</p>
                        <p>Florianópolis, SC</p>
                        <p><strong>Fone:</strong>(48) 998000000</p>
                        <p><strong>Email:</strong> loremipsum@email.com</p>
                    </div>

                    <div class="col-md-4">
                      
                        <h4>Atendimento</h4>
                        
                        <p>Dias e horários de atendimento ao público externo:</p>
                        <strong>Segunda á Sexta:</strong>
                        <p>09:00 até 12:00 | 13:00 até 18:00</p>
                    </div>
                    <div class="col-12">
                    <hr class="light"/>
                        <h5>Desenvolvido por &copy; Leonardo Pereira Recco</h5>
                    </div>
                </div>
            </div>
            </footer>
        </div>
        );
    }
}

export default Rodape;
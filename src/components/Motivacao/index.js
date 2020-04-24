import React, {Component} from 'react';
import Imagem from '../img/frasemotivacional.png'

class Motivacao extends Component{
    render(){
        return(
            <div>
                <div class="container-fluid padding nadapodeparar">
                    <div class="row padding">
                        <div class="col-lg-6 text-center naopodeparar1"> 
                            <img src={Imagem} class="img-fluid" />
                        </div>
                    <div class="col-lg-6 naopodeparar2">
                        <h2>Nada Pode Nos Parar Agora</h2>
                        <hr />
                        <br />
                        <p class="lead">
                        A Lorem Ipsum já está consolidada, somente na região da Grande 
                        Florianópolis contamos com mais de 25 mil imóveis gerenciados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Motivacao;
import React, {Component} from 'react';
import Imagem from '../img/tec.png';

class Introducao extends Component{
    render(){
        return(
            <div>
                <div class="container-fluid padding fonte">
                    <div class="row padding">
                        <div class="col-lg-6">
                        <br/><br/>
                        <h2 class="titulo"><strong>E se nossa solução automatizasse o setor de contas de água, energia, IPTU ou mesmo taxas de condomínios de seus imóveis?</strong></h2>
                        <p class="subtitulo">
                            A IMOBO.com.br tem como meta utilizar as tecnologias existentes para facilitar a sua vida.
                        </p>
                            <p><i class="fas fa-caret-right"></i> Nossos robôs  podem fazer todos os gerenciamentos para você.</p>
                            <p><i class="fas fa-caret-right"></i> Mostramos tudo sobre os seus imóveis.</p>
                            <p><i class="fas fa-caret-right"></i> Economize tempo e dinheiro ao nos deixar fazer o gerenciamento.</p>
                            <p><i class="fas fa-caret-right"></i> Saiba de tudo com apenas um clique.</p>
                        </div>
                    <div class="col-lg-6 text-center bordado"> 
                        <br/><br/>
                        <h2 class="titulo"><strong>Assista nosso vídeo rapidamente!</strong></h2>
                        <br/>
                        <div class="borda">
                        <iframe width="95%" height="300px" src="https://www.youtube.com/embed/PseDVRRwcak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Introducao;
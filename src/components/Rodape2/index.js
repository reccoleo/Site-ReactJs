import React, {Component} from 'react';
import Imagem from '../img/logo2.png';
import '../../estilo.css';

class Rodape2 extends Component{
    render(){
        return(
            <div>
                <footer>
                    <div class="container">
                        <div class="row text-center rodape2">
                            <div class="col-12">
                                <h5>Desenvolvido por &copy; Leonardo Pereira Recco</h5>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Rodape2;
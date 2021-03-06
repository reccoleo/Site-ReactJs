import React, {Component} from 'react';
import Imagem from '../img/cliente4.png';

class Clientes extends Component{
    render(){
        return(
            <div>
               <div class="container-fluid padding text-center clientes">
            <div class="row padding">
                <div class="col-lg-6 text-center imagem">
                    <img src={Imagem} class="img-fluid"/>
                </div>
                <div class="col-lg-6  text-center"> 
                    <h2 class="titulo-clientes">Nossos principais clientes:</h2>
                    <br />
                    <div class="row">
                        <div class="col-12">
                            <h4 class="titulo-cliente">Florianópolis - SC</h4>
                        <div class="row-1 texto-cliente1">
                            <p>Dorime</p>
                            <p>Ameno</p>
                            <p>Latire</p>
                        </div>
                        </div>
                        <div class="col-12">
                            <h4  class="titulo-cliente">Criciúma - SC</h4>
                        <div class="row-2 texto-cliente2">
                            <p>Ameno Dori</p>
                            <p>Ameno Dorime</p>
                            <p>Noctureno</p>
                        </div>
                        </div>
                        <div class="col-12">
                            <h4  class="titulo-cliente">São Paulo - SP</h4>
                        <div class="row-2 texto-cliente13">
                            <p>Ameno Dorime</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
}


export default Clientes;
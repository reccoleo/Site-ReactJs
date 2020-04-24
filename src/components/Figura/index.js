import React, {Component} from 'react';
import '../../estilo.css';
import Imagem from '../img/predios.jpg';
import {Link} from 'react-router-dom';

class Figura extends Component{
    render(){
        return(
            <div>
                <div id="slides" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                <li data-target="#slides" data-slide-to="0" class="active"></li>
            </ul>
            <div class="carousel-inner"> 
                <div class="carousel-item active">
                    <img src={Imagem} /> 
                    <div class="carousel-caption">
                        <h1 class="display-2">Lorem Ipsum</h1>
                        <h3>Lorem Ipsum</h3>
                        <Link to="/sobre"><button type="button" class="btn btn-outline-light btn-lg">Saiba Mais</button></Link>
                        <Link to="/contato"><button type="button" class="btn btn-primary btn-lg botao">Contato</button></Link>
                    </div>
                </div>
            </div>
        </div>
            </div>
        );
    }
}

export default Figura;
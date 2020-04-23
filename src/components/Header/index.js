import React, {Component} from 'react';
import Imagem from '../img/logo2.png';
import '../../estilo.css';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-md ">
                    <div class="container-fluid">
                        <Link to="/"><a class="navbar-brand" href="#"><img src={Imagem}/></a></Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"> 
                            <i class="fas fa-bars menu-hamburguer"></i> 
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <Link to="/"><a class="nav-link active" href="#">Home</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/sobre"><a class="nav-link" href="#">Sobre</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/servicos"><a class="nav-link" href="#">Serviços</a></Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/contato"><a class="nav-link" href="#">Contato</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
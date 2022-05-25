import React from "react";
import logoVirtuosa from '../assets/img/logo 1.svg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <nav>
            <input type="checkbox" name="check" id="chk-menu" />
            <label for="chk-menu" class=" btn-menu"><i class="fas fa-bars"></i></label>

            <ul class="nav-menu">
                <li>
                    <Link to="/" className="active item">
                    INICIO</Link>
                </li>
                <li>
                    <a href="*" class="item">MAQUILLAJE <i class="fa-solid fa-angle-down"></i></a>
                    <ul class="submenu">
                        <li><a href="*">Rubor</a></li>
                        <li><a href="*">Ojos</a></li>
                        <li><a href="*">Piel</a></li>
                        <li><a href="*">Labios</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/moda" class="item">MODA <i class="fa-solid fa-angle-down"></i></a>
                    <ul class="submenu">
                        <li><a href="/moda-vestidos">Vestidos</a></li>
                        <li><a href="/moda-diseña">Diseña tu look</a></li>
                        <li><a href="/moda-tendencias">Novedades</a></li>
                        <li><a href="/moda-descuentos">Promociones</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/tips" class="item">TIPS <i class="fa-solid fa-angle-down"></i></a>
                    <ul class="submenu">
                        <li><a href="*">Tips Maquillaje</a></li>
                        <li><a href="*">Tips Ropa</a></li>
                    </ul>
                </li>

            </ul>
            <Link to="/">
            <div class="logo"><img src={logoVirtuosa} alt="logo" /></div></Link>
            <ul class="nav-menu">

                <li><a href="/experiencias" class="item">EXPERIENCIAS</a></li>
                <li><a href="*" class="item">NOSOTROS</a></li>
                <li><a href="*" class="item">CONTACTO</a></li>

            </ul>
        </nav>
    );
}

export default Home;


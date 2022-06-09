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
                    <Link to="/VirtuosaReact" className="active item">
                        INICIO</Link>
                </li>
                <li>
                    <Link to="*" class="item">MAQUILLAJE <i class="fa-solid fa-angle-down"></i></Link>
                    <ul class="submenu">
                        <li><Link href="*">Rubor</Link></li>
                        <li><Link href="*">Ojos</Link></li>
                        <li><Link href="*">Piel</Link></li>
                        <li><Link href="*">Labios</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/VirtuosaReact/moda" class="item">MODA <i class="fa-solid fa-angle-down"></i></Link>
                    <ul class="submenu">
                        <li><Link href="/moda-vestidos">Vestidos</Link></li>
                        <li><Link href="/moda-diseña">Diseña tu look</Link></li>
                        <li><Link href="/moda-tendencias">Novedades</Link></li>
                        <li><Link href="/moda-descuentos">Promociones</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/VirtuosaReact/tips" class="item">TIPS <i class="fa-solid fa-angle-down"></i></Link>
                    <ul class="submenu">
                        <li><Link href="*">Tips Maquillaje</Link></li>
                        <li><Link href="*">Tips Ropa</Link></li>
                    </ul>
                </li>

            </ul>
            <Link to="/VirtuosaReact">
                <div class="logo"><img src={logoVirtuosa} alt="logo" /></div>
            </Link>

            <ul class="nav-menu">
                <li><Link href="/VirtuosaReact/experiencias" class="item">EXPERIENCIAS</Link></li>
                <li><Link href="/VirtuosaReact/nosotros" class="item">NOSOTROS</Link></li>
                <li><Link href="/VirtuosaReact/contacto" class="item">CONTACTO</Link></li>

            </ul>
        </nav>
    );
}

export default Home;


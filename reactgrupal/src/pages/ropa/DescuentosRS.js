import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Home from '../../components/home/home';  // nav bar

import '../../../src/components/assets/css/Descuentos.css';

import Slide1 from '../../components/carousel/ropa/descuentos/descuento1';
import Slide2 from '../../components/carousel/ropa/descuentos/descuento2';
import Slide3 from '../../components/carousel/ropa/descuentos/descuento3';
import Slide4 from '../../components/carousel/ropa/descuentos/descuento4';
import Slide5 from '../../components/carousel/ropa/descuentos/descuento5';
import Slide6 from '../../components/carousel/ropa/descuentos/descuento6';
import Slide7 from '../../components/carousel/ropa/descuentos/descuento7';
import Slide8 from '../../components/carousel/ropa/descuentos/descuento8';
import Slide9 from '../../components/carousel/ropa/descuentos/descuento9';

function Descuentos() {
    return (
        <div>
            <Header />
            <Home />
            <section class="banner-descuentos">
                <h1>SALES</h1>
            </section>

            <div class="contenedor-descuentos">
                <h1>Descuentos</h1>
                <div class="container-descuentos">
                    <div class="boton1">
                        <select name="corte" id="corte">
                            <option value="0" selected>Corte</option>
                            <option value="1">Corto</option>
                            <option value="2">Semicorto</option>
                            <option value="3">Largo</option>
                        </select>
                        <select name="talla" id="talla">
                            <option value="0" selected>Talla</option>
                            <option value="1">XXS</option>
                            <option value="2">XS</option>
                            <option value="3">S</option>
                            <option value="4">M</option>
                            <option value="5">L</option>
                            <option value="6">XL</option>
                            <option value="7">XXL</option>
                        </select>
                        <select name="ocasion" id="ocasion">
                            <option value="0" selected>Ocasion</option>
                            <option value="1">Casual</option>
                            <option value="2">Noche</option>
                            <option value="3">Vestido de gala</option>
                            <option value="4">Work</option>
                        </select>
                        <select name="color" id="color">
                            <option value="0" selected>Color</option>
                            <option value="1">Rojo</option>
                            <option value="2">Blanco</option>
                            <option value="3">Negro</option>
                            <option value="4">Morado</option>
                            <option value="5">Lila</option>
                        </select>
                    </div>

                    <div class="boton2">
                        <select name="popularidad" id="popularidad" class="popularidad">
                            <option value="0" selected>Ordenar por </option>
                            <option value="1">Popularidad</option>
                            <option value="2">Precio de menor a mayor</option>
                            <option value="3">Precio de mayor a menor</option>
                            <option value="4">Novedades</option>
                        </select>
                    </div>
                </div>

                <div class="container2">
                    <div class="card">
                        <div class="venta1">
                            <a href="#modal"><img src="https://res.cloudinary.com/colombia/image/upload/v1650498773/kuepa/descuentos/1/20WWVK61_3007_1_a7gbkb.jpg" alt="" /></a>
                        </div>
                        <div class="text-card" id="product1">
                            <a href="#modal">
                                <h4>Vestido midi acampanado</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div class="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i class="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <section id="modal" class="modal">
                                <a href="#producto1" class="close"> X </a>
                                <div class="modalContainer">
                                    <figure class="modalPicture ">
                                        <Slide1/>
                                    </figure>
                                    <figure class="modalTEXT">
                                        <h2 class="modalTitle">Vestido midi acampanado</h2>
                                        <p class="modalP">Un vestido que te sienta bien todo el año. De silueta entallada y estampado de vuelo, su largo midi es cómodo y muy actual, al igual que el estampado de bandas diagonales con motivos florales. Con cuello redondo y sin mangas.
                                        </p>
                                        <div class="charact">
                                            <ul>
                                                <li>Cuello redondo</li>
                                                <li>Estampado con diferentes motivos florales en bandas diagonales</li>
                                                <li>Capa superior de tejido semitransparente (malla)</li>
                                                <li>Revestimiento interior</li>
                                                <li>Acampanado</li>
                                                <li>Midi</li>
                                                <li>Sin mangas</li>
                                            </ul>
                                        </div>
                                        <div class="select-icon">
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i class="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </section>

                        </div>
                    </div>

                    <div class="card">
                        <div class="venta2">
                            <a href="#modal2">
                                <img src="https://res.cloudinary.com/colombia/image/upload/v1650501049/kuepa/descuentos/2/22SWVW76_9019_1_ubossb.jpg" alt="" />
                            </a>
                        </div>
                        <div class="text-card" id="product1">
                            <a href="#modal2">
                                <h4>Pichi patchwork Johnson Hartig</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div class="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i class="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <section id="modal2" class="modal">
                                <a href="#producto1" class="close"> X </a>
                                <div class="modalContainer">
                                    <figure class="modalPicture ">
                                        <Slide2/>
                                    </figure>
                                    <figure class="modalTEXT">
                                        <h2 class="modalTitle">Pichi patchwork Johnson Hartig</h2>
                                        <p class="modalP">Parece un vestido minifaldero pero esconde debajo unos shorts para mayor comodidad . Este pichi lleno de un mosáico hipnótico de estampados está diseñado por Johnson Hartig y confeccionado en un agradable algodón más sostenible.</p>
                                        <div class="charact">
                                            <ul>
                                                <li>Escote redondo</li>
                                                <li>Cierre de cremallera</li>
                                                <li>Dos bolsillos delanteros</li>
                                                <li>Mix de estampados formando un mosaico infinito</li>
                                                <li>Mini pantalón debajo de la falda que se ve en la parte trasera</li>
                                                <li>Tejido de algodón muy suave.</li>
                                                <li>Fibras sostenibles: Algodón BCI</li>
                                                <li>Sin mangas</li>
                                            </ul>
                                        </div>
                                        <div class="select-icon">
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i class="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div class="card">
                        <div class="venta3">
                            <a href="#modal3">
                                <img src="https://res.cloudinary.com/colombia/image/upload/v1650502973/kuepa/descuentos/3/22SWVKXC_7002_2_ihjtyz.jpg" alt="" />
                            </a>
                        </div>
                        <div class="text-card" id="product1">
                            <a href="#modal3"><h4>Vestido midi escote espalda</h4></a>
                            <p>$ 100.000</p>
                            <div class="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i class="fa-solid fa-cart-arrow-down"></i>
                            </div>
                            <section id="modal3" class="modal">
                                <a href="#producto1" class="close"> X </a>
                                <div class="modalContainer">
                                    <figure class="modalPicture ">
                                        <Slide3/>
                                    </figure>
                                    <figure class="modalTEXT">
                                        <h2 class="modalTitle">Vestido midi escote espalda</h2>
                                        <p class="modalP">Vestido midi ajustado confeccionado con un suave canalé liso, mangas cortas abullonadas con estampado de flores y escote en la espalda en forma ovalada.
                                        </p>
                                        <div class="charact">
                                            <ul>
                                                <li>Escote circular en la espalda</li>
                                                <li>Interior forrado a tono</li>
                                                <li>Fibras sostenibles: Lenzing TM Ecovero TM</li>
                                                <li>Composición exterior: 6% ELASTANO, 8% ALGODON, 86% VISCOSA</li>
                                            </ul>
                                        </div>
                                        <div class="select-icon">
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i class="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </section>
                        </div>
                    </div>


                    <div class="card">
                        <div class="venta4">
                            <a href="#modal4">
                                <img src="https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dw51e05be0/images/B2C/22SWVK46_2000_1.jpg?sfrm=jpg&sw=538" alt="" />
                            </a>
                        </div>
                        <div class="text-card" id="product1">
                            <a href="#modal4">
                                <h4>Vestido orquídeas</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div class="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i class="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <section id="modal4" class="modal">
                                <a href="#producto1" class="close"> X </a>
                                <div class="modalContainer">
                                    <figure class="modalPicture ">
                                        <Slide4/>
                                    </figure>
                                    <figure class="modalTEXT">
                                        <h2 class="modalTitle">Vestido orquídeas</h2>
                                        <p class="modalP">Punto y tul en viscosa ecológica con estampado de orquídeas. Este vestido tiene mangas largas semitransparentes, falda a capas y cuello mao que se sujeta con un cordón.
                                        </p>
                                        <div class="charact">
                                            <ul>
                                                <li>Cuello mao</li>
                                                <li>Cierre con cordón</li>
                                                <li>Estampado floral de orquídeas</li>
                                                <li>Falda a capas</li>
                                                <li>Mangas semitransparentes en tul</li>
                                                <li>Evasé</li>
                                                <li>Por la rodilla</li>
                                                <li>Manga larga</li>
                                                <li>Viscosa Lenzing Ecovero</li>
                                            </ul>
                                        </div>
                                        <div class="select-icon">
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i class="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </section>

                        </div>
                    </div>
                    <div class="card">
                        <div class="venta5">
                            <a href="#modal5">
                                <img src="https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dw521218a9/images/B2C/22SWVW56_2000_1.jpg?sfrm=jpg&sw=538" alt="" />
                            </a>
                        </div>
                        <div class="text-card" id="product1">
                            <a href="#modal5">
                                <h4>Vestido cut-out floral</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div class="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i class="fa-solid fa-cart-arrow-down"></i>
                            </div>
                            <section id="modal5" class="modal">
                                <a href="#producto1" class="close"> X </a>
                                <div class="modalContainer">
                                    <figure class="modalPicture ">
                                        <Slide5/>
                                    </figure>
                                    <figure class="modalTEXT">
                                        <h2 class="modalTitle">Vestido cut-out floral</h2>
                                        <p class="modalP">Un patrón muy tendencia con este corte maxi con cuello cerrado y cut-outs laterales en la cintura. El estampado de este vestido boho es de flores de diversos tamaños y colores. Confeccionado en viscosa ecológica.
                                        </p>
                                        <div class="charact">
                                            <ul>
                                                <li>Cuello redondo</li>
                                                <li>Estampado floral de diversos tamaños</li>
                                                <li>Cut-outs laterales</li>
                                                <li>Boho</li>
                                                <li>Largo maxi</li>
                                                <li>Sin mangas</li>
                                                <li>Viscosa Lenzing Ecovero</li>
                                            </ul>
                                        </div>
                                        <div class="select-icon">
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i class="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="card">
                        <div class="venta6">
                            <a href="#modal6">
                                <img src="https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dw900c6eb6/images/B2C/22SWVK45_2000_1.jpg?sfrm=jpg&sw=538" alt="" />
                            </a>
                        </div>
                        <div class="text-card" id="product1">
                            <a href="#modal6">
                                <h4>Vestido rushing floral</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div class="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i class="fa-solid fa-cart-arrow-down"></i>
                            </div>
                            <section id="modal6" class="modal">
                                <a href="#producto1" class="close"> X </a>
                                <div class="modalContainer">
                                    <figure class="modalPicture ">
                                        <Slide6/>
                                    </figure>
                                    <figure class="modalTEXT">
                                        <h2 class="modalTitle">Vestido rushing floral</h2>
                                        <p class="modalP">Confeccionado en tul de viscosa ecológica con estampado full print floral en tonos vivos. Este vestido tiene rushing por todo el cuerpo, queda por encima de la rodilla y tiene mangas abullonadas.
                                        </p>
                                        <div class="charact">
                                            <ul>
                                                <li>Escote cuadrado</li>
                                                <li>Estampado floral multicolor</li>
                                                <li>Slim fit</li>
                                                <li>Minifalda</li>
                                                <li>Manga corta</li>
                                                <li>Viscosa Lenzing Ecovero</li>
                                            </ul>
                                        </div>
                                        <div class="select-icon">
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i class="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div class="card">
                        <div class="venta7">
                            <a href="#modal7">
                                <img src="https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dwc1f3eb31/images/B2C/22SWVK45_2023_1.jpg?sfrm=jpg&sw=538" alt="" />
                            </a>
                        </div>
                        <div class="text-card" id="product1">
                            <a href="#modal7"><h4>Vestido rushing floral</h4></a>
                            <p>$ 100.000</p>
                            <div class="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i class="fa-solid fa-cart-arrow-down"></i>
                            </div>
                            <section id="modal7" class="modal">
                                <a href="#producto1" class="close"> X </a>
                                <div class="modalContainer">
                                    <figure class="modalPicture ">
                                        <Slide7/>
                                    </figure>
                                    <figure class="modalTEXT">
                                        <h2 class="modalTitle">Vestido rushing floral</h2>
                                        <p class="modalP">Confeccionado en tul de viscosa ecológica con estampado full print floral en blanco y negro. Este vestido tiene rushing por todo el cuerpo, queda por encima de la rodilla y tiene mangas abullonadas.
                                        </p>
                                        <div class="charact">
                                            <ul>
                                                <li>Escote cuadrado</li>
                                                <li>Estampado floral en blanco y negro</li>
                                                <li>Slim fit</li>
                                                <li>Minifalda</li>
                                                <li>Manga corta</li>
                                                <li>Viscosa Lenzing Ecovero</li>
                                            </ul>
                                        </div>
                                        <div class="select-icon">
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i class="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </section>

                        </div>
                    </div>

                    <div class="card">
                        <div class="venta8">
                            <a href="#modal8">
                                <img src="https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dwb86b4915/images/B2C/20WWVKXE_2020_1.jpg?sfrm=jpg&sw=538" alt="" />
                            </a>
                        </div>
                        <div class="text-card" id="product1">
                            <a href="#modal8">
                                <h4>Vestido ajustado a la rodilla</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div class="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i class="fa-solid fa-cart-arrow-down"></i>
                            </div>
                            <section id="modal8" class="modal">
                                <a href="#producto1" class="close"> X </a>
                                <div class="modalContainer">
                                    <figure class="modalPicture ">
                                        <Slide8/>
                                    </figure>
                                    <figure class="modalTEXT">
                                        <h2 class="modalTitle">Vestido ajustado hasta la rodilla</h2>
                                        <p class="modalP">Un estampado oscuro, aparentemente abstracto, deja ver mariposas de colores revoloteando por toda la prenda. Con cuello redondo y corte ajustado, llega a la rodilla y tiene una capa superior que deja entrever el forro interior.
                                        </p>
                                        <div class="charact">
                                            <ul>
                                                <li>Cuello redondo</li>
                                                <li>Estampado de mariposas sobre fondo negro</li>
                                                <li>Capa superior de viscosa semitransparente</li>
                                                <li>Forro interior negro</li>
                                                <li>Silueta entallada</li>
                                                <li>Ajustado</li>
                                                <li>Hasta la rodilla</li>
                                                <li>Manga francesa</li>
                                            </ul>
                                        </div>
                                        <div class="select-icon">
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i class="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div class="card">
                        <div class="venta9">
                            <a href="#modal9">
                                <img src="https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dw6c54745d/images/B2C/22SWVW49_1000_1.jpg?sfrm=jpg&sw=538" alt="" />
                            </a>
                        </div>
                        <div class="text-card" id="product1">
                            <a href="#modal9">
                                <h4>Vestido boho safari</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div class="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i class="fa-solid fa-cart-arrow-down"></i>
                            </div>
                            <section id="modal9" class="modal">
                                <a href="#producto1" class="close"> X </a>
                                <div class="modalContainer">
                                    <figure class="modalPicture ">
                                        <Slide9/>
                                    </figure>
                                    <figure class="modalTEXT">
                                        <h2 class="modalTitle">Vestido boho safari</h2>
                                        <p class="modalP">Confeccionado en tejido elástico de viscosa ecológica, este vestido camisero tiene falda evasé y lazada a la cintura. Su estampado, es fotográfico floral de flores silvestres.
                                        </p>
                                        <div class="charact">
                                            <ul>
                                                <li>Cuello camisero</li>
                                                <li>Cierre de botones</li>
                                                <li>Bolsillos superiores y laterales</li>
                                                <li>Estampado fotográfico floral</li>
                                                <li>Lazada a la cintura</li>
                                                <li>Regular fit</li>
                                                <li>Minifalda</li>
                                                <li>Manga corta</li>
                                                <li>Viscosa Lenzing Ecovero</li>
                                            </ul>
                                        </div>
                                        <div class="select-icon">
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i class="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <div class="container3">
                    <div class="solo"></div>
                    <div class="botones">
                        <h2 class="bt-1"><a href="./productosRS.html">1</a></h2>
                        <h3 class="bt-2"><a href="./productosRS.html">2</a></h3>
                        <h3 class="bt-3"><a href="./productosRS.html">3</a></h3>
                        <h3 class="bt-4"><a href="./productosRS.html">...</a></h3>
                    </div>
                    <div class="solo2"></div>
                </div>

            </div>

            <Footer />
        </div>

    );
}

export default Descuentos;
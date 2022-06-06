import NoAlert from '../../components/header/NoAlert';
import Footer from '../../components/footer/footer';
import Home from '../../components/home/home';  // nav bar

import '../../../src/components/assets/css/Vestidos.css';

import Venta1 from '../../components/assets/img/ropa/banner/apartados/ventas/venta1.png';
import Venta2 from '../../components/assets/img/ropa/banner/apartados/ventas/venta2.jpeg';
import Venta5 from '../../components/assets/img/ropa/banner/apartados/ventas/venta5.jpeg';

import Slide1 from '../../components/carousel/ropa/vestidos/venta1';
import Slide2 from '../../components/carousel/ropa/vestidos/venta2';
import Slide3 from '../../components/carousel/ropa/vestidos/venta3';
import Slide4 from '../../components/carousel/ropa/vestidos/venta4';
import Slide5 from '../../components/carousel/ropa/vestidos/venta5';
import Slide6 from '../../components/carousel/ropa/vestidos/venta6';
import Slide7 from '../../components/carousel/ropa/vestidos/venta7';
import Slide8 from '../../components/carousel/ropa/vestidos/venta8';
import Slide9 from '../../components/carousel/ropa/vestidos/venta9';


function Vestidos() {
    return (
        <div>
            <NoAlert/>
            <Home />
            <section class="viste-a-la-moda">
                <h1>VISTE A LA MODA</h1>
            </section>

            <div className="contenedor">
                <h1>Vestidos</h1>
                <div className="container">
                    <div className="boton1">
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

                    <div className="boton2">
                        <select name="popularidad" id="popularidad" className="popularidad">
                            <option value="0" selected>Ordenar por </option>
                            <option value="1">Popularidad</option>
                            <option value="2">Precio de menor a mayor</option>
                            <option value="3">Precio de mayor a menor</option>
                            <option value="4">Novedades</option>
                        </select>
                    </div>
                </div>

                <div className="container2">
                    <div className="card">
                        <div className="venta1">
                            <a href="#modal">
                                <img src={Venta1} alt="" />
                            </a>
                        </div>
                        <div className="text-card" id="product1">
                            <a href="#modal">
                                <h4>Vestido largo boho</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div className="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <div id="modal" className="modal">
                                <a href="#producto1" className="close"> X </a>
                                <div className="modalContainer">
                                    <figure className="modalPicture ">
                                        <Slide1 />
                                    </figure>
                                    <figure className="modalTEXT">
                                        <h2 className="modalTitle">Vestido largo boho</h2>
                                        <p className="modalP">Podría decirse que estamos ante un trampantojo. Este vestido midi de
                                            manga corta luce una capa de tul semitransparente con falda larga y una exquisita
                                            combinación patch de estampados florales y animales que se asemejan al estilo boho.
                                            Para que saques a relucir tu esencia más natural.
                                        </p>
                                        <div className="charact">
                                            <ul>
                                                <li>Cuello redondo</li>
                                                <li>Patch con print animal y floral</li>
                                                <li>Capa de gasa semitransparente</li>
                                                <li>Vestido básico inferior</li>
                                                <li>Patrón largo regular</li>
                                                <li>Manga corta</li>
                                            </ul>
                                        </div>
                                        <div className="select-icon">
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
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i className="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card">
                        <div className="venta2">
                            <a href="#modal2"><img src={Venta2} alt="" /></a>
                        </div>
                        <div className="text-card" id="product1">
                            <a href="#modal2"><h4>Vestido evasé midi</h4></a>
                            <p>$ 100.000</p>
                            <div className="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <div id="modal2" className="modal">
                                <a href="#producto1" className="close"> X </a>
                                <div className="modalContainer">
                                    <figure className="modalPicture ">
                                        <Slide2 />
                                    </figure>
                                    <figure className="modalTEXT">
                                        <h2 className="modalTitle">Vestido evasé midi</h2>
                                        <p className="modalP">En punto en color negro con una estampación arty. Este vestido midi tiene un corte evasé, con mangas cortas y escote cuadrado, además de un acabado elástico en algodón sostenible.</p>
                                        <div className="charact">
                                            <ul>
                                                <li>Escote redondo</li>
                                                <li>Estampación arty en tonos vivos</li>
                                                <li>Evasé</li>
                                                <li>Largo midi</li>
                                                <li>Manga corta</li>
                                                <li>Algodón BCI</li>
                                            </ul>
                                        </div>
                                        <div className="select-icon">
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
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i className="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="venta3">
                            <a href="#modal3">
                                <img src="https://www.desigual.com/dw/image/v2/BCVV_PRD/on/demandware.static/-/Sites-desigual-m-catalog/default/dw032f405b/images/B2C/22SWVW47_9019_1.jpg?sfrm=jpg&sw=420&q=90" alt="" />
                            </a>
                        </div>
                        <div className="text-card venta-font" id="product1">
                            <a href="#modal3">
                                <h4>Vestido boho tropical</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div className="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <div id="modal3" className="modal">
                                <a href="#producto1" className="close"> X </a>
                                <div className="modalContainer">
                                    <figure className="modalPicture ">
                                        <Slide3 />
                                    </figure>
                                    <figure className="modalTEXT">
                                        <h2 className="modalTitle">Vestido boho tropical</h2>
                                        <p className="modalP">Un tejido muy ligero con mucha textura. Vestido boho, con escote con volante, falda larga tipo pareo y estampado tropical de flores y loros.
                                        </p>
                                        <div className="charact">
                                            <ul>
                                                <li>Escote barco con volante</li>
                                                <li>Goma en la cintura</li>
                                                <li>Estampado tropical de loros y flores en blanco</li>
                                                <li>Falda tipo pareo abierta por delante</li>
                                                <li>Boho</li>
                                                <li>Largo maxi</li>
                                                <li>Sin mangas</li>
                                            </ul>
                                        </div>
                                        <div className="select-icon">
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
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i className="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card">
                        <div className="venta4">
                            <a href="#modal4">
                                <img src="https://res.cloudinary.com/colombia/image/upload/v1650421353/kuepa/productos/4/22SWVW44_9019_1_lpsmqs.jpg" alt="" />
                            </a>
                        </div>
                        <div className="text-card" id="product1">
                            <a href="#modal4">
                                <h4>Vestido camisero</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div className="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <div id="modal4" className="modal">
                                <a href="#producto1" className="close"> X </a>
                                <div className="modalContainer">
                                    <figure className="modalPicture ">
                                        <Slide4 />
                                    </figure>
                                    <figure className="modalTEXT">
                                        <h2 className="modalTitle">Vestido camisero</h2>
                                        <p className="modalP">Confeccionado en tejido elástico de viscosa ecológica, este vestido camisero tiene falda evasé y lazada a la cintura. Su estampado, creado por M. Christian Lacroix, es en patch de tejidos florales.
                                        </p>
                                        <div className="charact">
                                            <ul>
                                                <li>Cuello camisero</li>
                                                <li>Cierre de botones</li>
                                                <li>Bolsillos superiores y laterales</li>
                                                <li>Estampado patch floral</li>
                                                <li>Lazada a la cintura</li>
                                                <li>Regular fit</li>
                                                <li>Minifalda</li>
                                                <li>Manga corta</li>
                                            </ul>
                                        </div>
                                        <div className="select-icon">
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
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i className="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card">
                        <div className="venta5">
                            <a href="#modal5">
                                <img src={Venta5} alt="" />
                            </a>
                        </div>
                        <div className="text-card" id="product1">
                            <a href="#modal5">
                                <h4>Vestido peonias</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div className="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <div id="modal5" className="modal">
                                <a href="#producto1" className="close"> X </a>
                                <div className="modalContainer">
                                    <figure className="modalPicture ">
                                        <Slide5 />
                                    </figure>
                                    <figure className="modalTEXT">
                                        <h2 className="modalTitle">Vestido peonias</h2>
                                        <p className="modalP">De algodón sostenible, cuello redondo y corte ligeramente evasé. Este vestido tipo camiseta tiene un estampado de peonías rosas sobre fondo naranja.
                                        </p>
                                        <div className="charact">
                                            <ul>
                                                <li>Cuello redondo</li>
                                                <li>Estampado peonías sobre fondo naranja</li>
                                                <li>Evasé</li>
                                                <li>Minifalda</li>
                                                <li>Manga corta</li>
                                                <li>Algodón BCI</li>
                                            </ul>
                                        </div>
                                        <div className="select-icon">
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
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i className="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="venta6">
                            <a href="#modal6">
                                <img src="https://res.cloudinary.com/colombia/image/upload/v1650422500/kuepa/productos/6/22SWVW26_3021_1_d1zlic.jpg" alt="" />
                            </a>
                        </div>
                        <div className="text-card venta-font2" id="product1">
                            <a href="#modal6">
                                <h4>Vestido estampado florals</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div className="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <div id="modal6" className="modal">
                                <a href="#producto1" className="close"> X </a>
                                <div className="modalContainer">
                                    <figure className="modalPicture ">
                                        <Slide6 />
                                    </figure>
                                    <figure className="modalTEXT">
                                        <h2 className="modalTitle">Vestido estampado floral</h2>
                                        <p className="modalP">Un diseño muy ligero y fresco en viscosa ecológica con estampados fotográficos florales de lilas en diversos tonos. Este vestido maxi de corte boho tiene tirantes finos y falda a capas.
                                        </p>
                                        <div className="charact">
                                            <ul>
                                                <li>Cuello redondo</li>
                                                <li>Estampados fotográficos de lilas</li>
                                                <li>Boho</li>
                                                <li>Larga maxi</li>
                                                <li>Tirantes finos</li>
                                                <li>Viscosa Lenzing Ecovero</li>
                                            </ul>
                                        </div>
                                        <div className="select-icon">
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
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i className="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="venta7">
                            <a href="#modal7"><img src="https://res.cloudinary.com/colombia/image/upload/v1650422889/kuepa/productos/7/21WWVKA6_9019_1_q3s9bw.jpg" alt="" /></a>
                        </div>
                        <div className="text-card" id="product1">
                            <a href="#modal7">
                                <h4>Vestido largo flores</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div className="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <div id="modal7" className="modal">
                                <a href="#producto1" className="close"> X </a>
                                <div className="modalContainer">
                                    <figure className="modalPicture ">
                                        <Slide7 />
                                    </figure>
                                    <figure className="modalTEXT">
                                        <h2 className="modalTitle">Vestido largo flores</h2>
                                        <p className="modalP">Un favorecedor vestido que luce un colorido estampado floral y una silueta que es puro contraste entre su busto slim de manga larga y su falda larga avolantada.
                                        </p>
                                        <div className="charact">
                                            <ul>
                                                <li>Cuello redondo</li>
                                                <li>Cierre de cremallera en la espalda</li>
                                                <li>Tiro medio</li>
                                                <li>Estampado floral en vivos colores</li>
                                                <li>Cinturón con el mismo estampado</li>
                                                <li>Regular fit</li>
                                                <li>Falda larga avolantada</li>
                                                <li>Manga larga ajustada</li>
                                            </ul>
                                        </div>
                                        <div className="select-icon">
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
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i className="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card">
                        <div className="venta8">
                            <a href="#modal8">
                                <img src="https://res.cloudinary.com/colombia/image/upload/v1650423367/kuepa/productos/8/22SWVK30_8021_2_mosqzd.jpg" alt="" />
                            </a>
                        </div>
                        <div className="text-card" id="product1">
                            <a href="#modal8">
                                <h4>Vestido arty camisetero</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div className="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <div id="modal8" className="modal">
                                <a href="#producto1" className="close"> X </a>
                                <div className="modalContainer">
                                    <figure className="modalPicture ">
                                        <Slide8 />
                                    </figure>
                                    <figure className="modalTEXT">
                                        <h2 className="modalTitle">Vestido arty camisetero</h2>
                                        <p className="modalP">Recuperando el heritage de Virtuosa se ha realizado este vestido con un dibujo muy arty. Se trata de un vestido tipo camiseta confeccionado en algodón sostenible que queda por encima de la rodilla.
                                        </p>
                                        <div className="charact">
                                            <ul>
                                                <li>Cuello redondo</li>
                                                <li>Dibujo abstracto</li>
                                                <li>Evasé</li>
                                                <li>Minifalda</li>
                                                <li>Manga corta</li>
                                                <li>Algondon BCI</li>
                                            </ul>
                                        </div>
                                        <div className="select-icon">
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
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i className="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="venta9">
                            <a href="#modal9">
                                <img src="https://res.cloudinary.com/colombia/image/upload/v1650424235/kuepa/productos/9/20WWVKXC_8010_1_xiuncz.jpg" alt="" />
                            </a>
                        </div>
                        <div className="text-card" id="product1">
                            <a href="#modal9">
                                <h4>Gold floral print dress</h4>
                            </a>
                            <p>$ 100.000</p>
                            <div className="select-icon">
                                <select name="cantidad" id="cantidad">
                                    <option value="0" selected>Cant.</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </div>

                            <div id="modal9" className="modal">
                                <a href="#producto1" className="close"> X </a>
                                <div className="modalContainer">
                                    <figure className="modalPicture ">
                                        <Slide9 />
                                    </figure>
                                    <figure className="modalTEXT">
                                        <h2 className="modalTitle">Vestido Gold floral print</h2>
                                        <p className="modalP">Brilla como el champán con este minivestido con volante en el bajo, estampado de florecitas en tonos tostados y dorados. De estilo boho-chic, nunca dejarás de llevarlo, tanto para salir de noche como para cualquier momento del día. ¡Viva la versatilidad!
                                        </p>
                                        <div className="charact">
                                            <ul>
                                                <li>Cuello en V</li>
                                                <li>Estampado de miniflores en tonos tostados-dorados</li>
                                                <li>Corte holgado</li>
                                                <li>Corto</li>
                                            </ul>
                                        </div>
                                        <div className="select-icon">
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
                                            <select name="cantidad" id="cantidad">
                                                <option value="0" selected>Cant.</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <i className="fa-solid fa-cart-arrow-down"></i>
                                        </div>
                                    </figure>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container3">
                    <div className="solo"></div>
                    <div className="botones">
                        <h2 className="bt-1"><a href="./productosRS.html">1</a></h2>
                        <h3 className="bt-2"><a href="./productosRS.html">2</a></h3>
                        <h3 className="bt-3"><a href="./productosRS.html">3</a></h3>
                        <h3 className="bt-4"><a href="./productosRS.html">...</a></h3>
                    </div>
                    <div className="solo2"></div>
                </div>

            </div>

            <Footer />
        </div>

    );
}

export default Vestidos;
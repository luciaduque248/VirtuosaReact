import React, { useState } from 'react';
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from './../contacto/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import '../contacto/Contact.css'
import Input from './inputs';

const App = () => {
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [telefono, cambiarTelefono] = useState({ campo: '', valido: null });
    // const [archivo, cambiarArchivo] = useState({campo: '', valido: null});
    // const [mensaje, cambiarMensaje] = useState({campo: '', valido: null});
    const [terminos, cambiarTerminos] = useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        mensaje: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    }

    const onChangeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (

            nombre.valido === 'true' &&
            correo.valido === 'true' &&
            telefono.valido === 'true' &&
            // archivo.valido === 'true' &&
            // mensaje.valido === 'true' &&
            terminos
        ) {
            cambiarFormularioValido(true);
            cambiarNombre({ campo: '', valido: null });
            cambiarCorreo({ campo: '', valido: null });
            cambiarTelefono({ campo: '', valido: null });
            // cambiarArchivo({campo: '', valido: null});
            // cambiarMensaje({campo: '', valido: null});

            // ... 
        } else {
            cambiarFormularioValido(false);
        }
    }

    return (

        <main className='formulario'>

            <Formulario action="" onSubmit={onSubmit}>
                <Input
                    estado={nombre}
                    cambiarEstado={cambiarNombre}
                    tipo="text"
                    label="Nombre"
                    placeholder="Ana Virtuosa"
                    name="usuario"
                    leyendaError="Por favor ingrese su nombre y apellido completo."
                    expresionRegular={expresiones.nombre}
                />
                <Input
                    estado={correo}
                    cambiarEstado={cambiarCorreo}
                    tipo="email"
                    label="Correo Electrónico"
                    placeholder="virtuosa@correo.com"
                    name="correo"
                    leyendaError="Por favor ingrese el correo electrónico que usa con mayor frecuencia."
                    expresionRegular={expresiones.correo}
                />
                <Input
                    estado={telefono}
                    cambiarEstado={cambiarTelefono}
                    tipo="text"
                    label="Teléfono"
                    placeholder="4491234567"
                    name="telefono"
                    leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
                    expresionRegular={expresiones.telefono}
                />
                <div>
                    <label for="file" className='archivos'><strong>Adjunta archivos</strong></label>
                    <input 
                    type="file" 
                    name='archivo' 
                    id='idarchivo' 
                    className='evidencia'/>
                </div>

                <div className='mensaje'>
                    <label for="message"><strong>Mensaje</strong></label>
                    <textarea 
                    className='observacion' 
                    name='observacion' 
                    rows="10" 
                    placeholder='Escribe tu observacion, inquietud, duda o sugerencia'/>
                </div>
                
                {/* //                                     <div>
                                     <label for="file">Adjunta evidencia</label>
                                        <input  id="file" required accept="image/*"/>
                                    </div>
                                    <div className="block">
                                        <label>Message</label> 
                                        <textarea name="message" rows="3"></textarea>
                                    </div> */}

                <ContenedorTerminos>
                    <Label>
                        <input
                            type="checkbox"
                            name="terminos"
                            id="terminos"
                            checked={terminos}
                            onChange={onChangeTerminos}
                        />
                        Acepto los Terminos y Condiciones
                    </Label>
                </ContenedorTerminos>
                {formularioValido === false && <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <b>Error:</b> Por favor rellena el formulario correctamente.
                    </p>
                </MensajeError>}
                <ContenedorBotonCentrado>
                    <Boton type="submit">Enviar</Boton>
                    {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
                </ContenedorBotonCentrado>


                

            </Formulario>

            <div className="contact-info">
                    <div>¡Hola! Gracias por comunicarte con nosotros, por favor déjanos el detalle de tu pregunta, novedad, o problema con el envío.<br /><br />Recuerda que la respuesta por este medio puede tardar entre 1-5 días hábiles sin contar sábados, domingos ni festivos, responderemos lo más pronto posible, y entre más concreto seas con la información de la novedad será más fácil y rápido darte solución.</div><br/>
                    <ul>
                        <li><i className="fa-solid fa-envelope"></i> servicioalcliente@virtuosa.com</li><br/>
                        <li><i className="fa-solid fa-location-dot"></i> Bogotá, Colombia</li><br/>
                        <li><i className="fa-solid fa-phone"></i> (601) 543 26 11</li><br/>
                    </ul>
                </div>
        </main>
    );
}

export default App;
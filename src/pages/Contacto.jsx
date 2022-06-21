import React from 'react'

const Contacto = () => {
    return (
        <>
            {/* Inicio del formulario de contacto */}
            <div class="contactForm">
                <div class="formulario">
                    <h1>Contacto</h1>
                    <h3>Escríbenos y en breve nos pondremos en contacto contigo</h3>
                    <form action="submeter-formulario.php" method="post">
                        <div>
                            <label for="nombre" class="colocar_nombre">Nombre/s<span class="obligatorio">*</span></label>
                            <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre/s" />
                        </div>
                        <div>
                            <label for="apellido" class="colocar_apellido">Apellido/s<span class="obligatorio">*</span></label>
                            <input type="text" name="introducir_apellido" id="apellido" required="obligatorio" placeholder="Escribe tu Apellido/s" />
                        </div>
                        <div>
                            <label for="email" class="colocar_email">Email<span class="obligatorio">*</span></label>
                            <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email" />
                        </div>
                        <div>
                            <label for="telefone" class="colocar_telefono">Teléfono</label>
                            <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono" />
                        </div>
                        <div>
                            <label for="asunto" class="colocar_asunto">Asunto<span class="obligatorio">*</span></label>
                            <select name="introducir_asunto">
                                <option value="starter" hidden>Seleccione un motivo...</option>
                                <option value="incripcion">Pedidos mayoristas</option>
                                <option value="arancel">Consulta de stock</option>
                                <option value="horario">Consulta por problema con producto particular</option>
                                <option value="acerca">Consulta por problema con envío</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div>
                            <label for="mensaje" class="colocar_mensaje">Mensaje<span class="obligatorio">*</span></label>
                            <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea>
                        </div>
                        <button type="submit" name="enviar_formulario" id="enviar">Enviar</button>
                        <div class="aviso">
                            <span class="obligatorio"> * </span>los campos son obligatorios.
                        </div>
                    </form>
                </div>
            </div>
            {/* Fin de formulario de contacto */}
        </>
)
}

export default Contacto
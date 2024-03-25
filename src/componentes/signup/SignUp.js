import React from 'react';
import '../../hojas-de-estilo/SignUp.css';

const SignUp = () => {
    return (
        <>
            <div className='contenedor-registro'>
                <h2>Crear cuenta</h2>
                <form className='formulario-crear-cuenta'>
                    <div>
                        <label htmlFor='nombre-apellido'>Nombre y Apellido</label>
                        <input type='text' name='nombre-apellido' id='nombre-apellido'/>
                    </div>
                    <div>
                        <label htmlFor='correo'>Email</label>
                        <input type='mail' name='email' id='email'/>
                    </div>
                    <div>
                        <label htmlFor='telefono'>Teléfono</label>
                        <input type='tel' name='telefono' id='telefono'/>
                    </div>
                    <div>
                        <label htmlFor='contrasenia'>Contraseña</label>
                        <input type='password' name='contrasenia' id='contrasenia' />
                    </div>
                    

                    <input type='submit' value='CREAR CUENTA' className='boton-crear-cuenta'/>
                </form>
            </div>
        </>
    );
}

export default SignUp;
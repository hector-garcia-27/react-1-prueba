import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='' id='footer'>
                <div className='redes'>
                    <h4>Siguenos en Redes</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item text-light'><a className='text-light text-decoration-none' href="...">Instagram</a></li>
                        <li className='list-group-item text-light'><a className='text-light text-decoration-none' href="...">Facebook</a></li>
                        <li className='list-group-item text-light'><a className='text-light text-decoration-none' href="...">Tiktok</a></li>
                    </ul>
                </div>
                <div className='info'>
                    <h4>mantente informado</h4>
                    <p>informacion de la serie</p>
                    <input type="text" placeholder='Correo electronico'/>
                    <button>Enviar</button>
                </div>
                <div className='text-start' >
                    <a className='text-light text-decoration-none' href="...">politica de privacidad</a> <br/>
                    <a className='text-light text-decoration-none' href="...">contacto para publicidad</a>
                </div>
            </div>
            <div className='box2'>
                <p> By Hector Garcia 2024</p>
            </div>
        </div>
    )
}

export default Footer
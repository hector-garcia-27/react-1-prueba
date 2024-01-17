import React from 'react'

const SeccionUno = () => {
    return (
        <div className='seccion1 align-items-center' id='sec'>
            <div>
                <h1>Sobre Dragon Ball Z</h1>
            </div>
            <div className='d-flex align-items-center justify-content-center' id='seccion1'>
                <img src="https://static.tvtropes.org/pmwiki/pub/images/dbz02.jpg" alt="DBZ personajes" />
                <div className='text m-5'>
                    <p className=''>Dragon Ball es un manga de Akira Toriyama inspirado en la novela china Viaje al Oeste. La trama describe las aventuras de Son Gokū, un guerrero saiyajin, desde su infancia hasta su edad adulta. Durante este tiempo, se somete básicamente a un entrenamiento de artes marciales y explora el mundo en búsqueda de siete objetos legendarios conocidos como las Dragon Ball ó Bolas del Dragón</p>
                </div>
            </div>
        </div>
    )
}

export default SeccionUno
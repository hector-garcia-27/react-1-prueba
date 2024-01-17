import { useEffect, } from 'react'

const MiApi = ({ personajes, setPersonajes, resultados, buscar }) => {

    useEffect(() => {
        consultarAPi()
    }, []);

    const consultarAPi = async () => {
        const urlAPi = "https://dragonball-api.com/api/characters"
        try {
            const res = await fetch(urlAPi);
            const data = await res.json();
            setPersonajes(data.items);
        } catch (error) {
            console.log(error)
        }
    }

    const personajesOrdenados = personajes.sort((a, b) => { // orden alfabetico inicia
        if (a.name < b.name){
            return -1
        } else if ( a.name > b.name){
            return 1
        } return 0
    })
    console.log(personajes)
    if (buscar === "") {
        var result1 = personajesOrdenados
    } else {
        var result1 = resultados
    }
    return (
        <>
            {result1.map((personaje) => {
                return (
                    <div className='m-4' id='card' key={personaje.id}>
                        <div className='d-flex align-items-center justify-content-evenly' id='card1'>
                            <div className='imagen'>
                                <img src={personaje.image} alt="" />
                            </div>
                            <div className='description'>
                                <h3>Nombre: {personaje.name}</h3>
                                <p>Raza: {personaje.race}</p>
                                <p>genero: {personaje.gender}</p>
                                <p>KI: {personaje.ki}</p>
                                <p>KI maximo: {personaje.maxKi}</p>
                                <p>Grupo de pelea: {personaje.affiliation}</p>
                            </div>
                        </div>
                        {/* <div className='texto'>
                            <p>{personaje.description}</p>
                        </div> */}
                    </div>
                );
            })}
        </>
    )
}

export default MiApi
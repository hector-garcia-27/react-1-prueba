const Buscador = ({ personajes, setResultados, buscar, setBuscar }) => {

    const handleSearch = (e) => {
        setBuscar(e.target.value)
        if (buscar === "") {
            setResultados(personajes)
        } else {
            const nuevoArray = personajes.filter((personaje) => 
            personaje.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            personaje.gender.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
            personaje.affiliation.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
            personaje.race.toLowerCase().startsWith(e.target.value.toLowerCase()))
            
            const newArrayOrdenado = nuevoArray.sort((a, b)=>{ // orden de busqueda por grupo (primero los Z Fighter)
                const grupoA = a.affiliation
                const grupoB = b.affiliation
                if(grupoA === "Z Fighter" && grupoB !== "Z Fighter"){
                    return -1
                } else if (grupoA !== "Z Fighter" && grupoB === "Z Fighter"){
                    return 1
                }else {
                    return 0
                }
            })
            setResultados(newArrayOrdenado)
        }
    }
    return (
        <div className="buscar2">
            <input type="text" placeholder='Buscar personaje' onChange={handleSearch} value={buscar} />
        </div>
    )
}
export default Buscador
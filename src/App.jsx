//componetes 
import { Butoon } from './componentes/Button'
import { Cartas } from './componentes/Cartas'
// stylos
import './Hojas-stylos sass/App.scss'
//hooks
import React from 'react'
import { useState, useEffect } from 'react';
//experternos iconos
import { TiChevronRightOutline } from "react-icons/ti";
import { TiChevronLeftOutline } from "react-icons/ti";






function App() {
  const [pokemosID, setpokemosID] = useState(1);
  const [evolucionesPokemos, setevolucionesPokemos] = useState([]);

  useEffect(() => {
    getEvolution(pokemosID);
  },[pokemosID]);



  async function getEvolution(id) {
    const response = await fetch(` https://pokeapi.co/api/v2/evolution-chain/${id}/`);
    const data = await response.json()

    let evoluciones = [ ]

    let evlucio1 = data.chain.species.name;
    let pokemosImagen = await getPokemonImg(evlucio1)
    evoluciones.push([evlucio1,pokemosImagen])

    if (data.chain.evolves_to.length !== 0) {
      let retornoEvlolucion2 = data.chain.evolves_to[0].species.name;
      let pokemosImagen2 = await getPokemonImg(retornoEvlolucion2)
      evoluciones.push([retornoEvlolucion2,pokemosImagen2])


      if (data.chain.evolves_to[0].evolves_to.length !== 0) {
        let evolucion3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let pokemosImagen3 = await getPokemonImg(evolucion3)
        evoluciones.push([evolucion3,pokemosImagen3])

        
        
      }
    }  
    setevolucionesPokemos(evoluciones) 




  }

  async function getPokemonImg(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const data = await response.json()
    return data.sprites.other['official-artwork'].front_default
  }


  function clickAtras() {
    //AQUI  LE POGO UNA CONDICION  PARA QUE NO PASE DE  MENO  "0"
    return (

      (pokemosID === 1) ? setpokemosID(1) :
        setpokemosID(pokemosID - 1)
    )

  }
  function clickAdelante() {
    return (

      setpokemosID(pokemosID + 1)
    )
  }


  return (
    <div className='app'>
      <div className='box__cartas'>
        
        {evolucionesPokemos.map(pokemon => 
        <Cartas  
         key ={pokemon[0]}
        name={pokemon[0]}
        img={pokemon[1]}
        /> 
        )}
      </div>
      <div className='conteinerButton'>
        <Butoon
          icon={<TiChevronLeftOutline />}
          handleClick={clickAtras}
        />
        <Butoon
          icon={<TiChevronRightOutline />}
          handleClick={clickAdelante}
        />
      </div>

    </div>
  )


}

export default App;






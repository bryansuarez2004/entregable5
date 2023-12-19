import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { gradientsByType } from "../constants/pokemon";

const PokemonDetail = () => {
   const [pokemonInfo, setpokemonInfo] = useState(null) 

  const {id} = useParams();

  const getPercentBarProgress = (stat_value) => {
      const percent = (stat_value * 100) / 255
      return percent + '%'
  }

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(({data})=> {setpokemonInfo(data)
    console.log(data)})
    .catch((err) => console.log(err))
  },[])




  /* no todos los pokemons tienen 2 tipos, por eso aqui verifica, si en la propiedad types que me llega del pokemonInfo, existe
  una posicion 2, de su array, entonces renderizo ese posicion, sino entonces lo dejo como string vacio y que no renderize nada. */
  let contenido = ''
  if(pokemonInfo?.types[1]){
    contenido = <div className="sectionStatsText"
    style={{
     backgroundColor: ` ${gradientsByType[pokemonInfo?.types[1]?.type.name]}`,
     color: 'white',
     border: 'none'
   }}
     >{pokemonInfo?.types[1].type.name ?pokemonInfo?.types[1].type.name : 'none'}</div>
  }

  /*  esta es una funcion que se ejecuta en el evento del click del boton, se llama el hook navigate de
  la libreria de routes y lo que retorna se alamcena en una variable, esa variable se ejecuta con la ruta a
  la que quiero enviar al usuario cuando de click al boton*/
  const navigate =useNavigate()

  const handleReturn = (e) =>{
     e.preventDefault()
     navigate('/pokedex')
     
  }


 
  return (



    <section className="cardPerfil">
       <div className="conteinerHeader">
        <div className="textHeader">
           <img src="/image11.png" alt="" />
        </div>
        <div className="imgHeader">
            <img src="/headerpok.png" alt="" />
        </div>
      </div>
      <article className="bodyCard">
        <header 
        className="headerPerfilPokemon"
        style={{backgroundImage: `linear-gradient(to bottom, ${gradientsByType[pokemonInfo?.types[0].type.name]}, #F8FFC6)`}}>
           <button className="btnReturn" onClick={handleReturn}>
            <img src="/61449.png" alt="" />
           </button>
          <img className="imgPerfilpokemon" src={pokemonInfo?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <span className="perfilcard__id"># {pokemonInfo?.id}</span>
        <h3 className="perfilcard__name">{pokemonInfo?.name}</h3>
        <div className="perfilcard__properties">
          <div>
            <h5>Weight</h5>
            <span>{pokemonInfo?.weight}</span>
          </div>
          <div>
            <h5>Height</h5>
            <span>{pokemonInfo?.height}</span>
          </div>
        </div>

        <div className="typeAndAbilities">
          <div className="section">
            <h3>TYPE</h3>
            <div className="sectionStats">
                 <div className="sectionStatsText"
                 style={{
                  backgroundColor: ` ${gradientsByType[pokemonInfo?.types[0].type.name]}`,
                  color: 'white',
                  border: 'none'
                }}
                 >{pokemonInfo?.types[0].type.name}</div>

                 {
                   contenido
                 }
            </div>
          
          </div>

          <div className="section">
          <h3>ABILITIES</h3>
            <div className="sectionStats">
                 <div className="sectionStatsText">{pokemonInfo?.abilities[0].ability.name}</div>
                 <div  className="sectionStatsText">{pokemonInfo?.abilities[1]?.ability.name}</div>
            </div>
          </div>
        </div>



        <section>
          <h4 className="textStats">Stats</h4>
          <ul className="conteinerProgress">
                {
                  pokemonInfo?.stats.map((stat)=> 
                  <li key={stat.stat.name}>
                    <div className="progressText">
                      <h5>{stat.stat.name}</h5>
                      <span>{stat.base_stat}/255</span>
                    </div>

                    <div className="totalProgress">
                      <div style={{
                        height:'100%',
                        backgroundImage: `linear-gradient(to right, red,orange)`,
                        width: getPercentBarProgress(stat.base_stat)
                      }}>

                      </div>
                    </div>
                  </li>)
                }
          </ul>
        </section>
      </article>
    </section>
  )
}
export default PokemonDetail
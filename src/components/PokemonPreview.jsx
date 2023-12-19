import axios from "axios";
import { useEffect, useState } from "react"
import { gradientsByType } from "../constants/pokemon";
import { Link } from "react-router-dom";

const PokemonPreview = ({pokemonURL}) => {

const [pokemonInfo, setPokemonInfo] = useState(null)


   
     
    useEffect(()=>{
        axios.get(`${pokemonURL}`)
        .then(({ data }) => setPokemonInfo(data))
       .catch((err) => console.log(err));
  },[])

  return (
    <Link 
    className="CardPokemon" 
    style={{border: `8px solid ${gradientsByType[pokemonInfo?.types[0].type.name]}`}} 
    to={`/pokedex/${pokemonInfo?.id}`}>


        <header 
        className="CardPokemon__img" 
        style={{backgroundImage: `linear-gradient(to bottom, ${gradientsByType[pokemonInfo?.types[0].type.name]}, #F8FFC6)`}}>
            
            <img 
            className="imgPokemon" 
            src={pokemonInfo?.sprites.other["official-artwork"].front_default} 
            alt="" />
        </header>
        <h3 className="CardPokemon__name">{pokemonInfo?.name}</h3>
        <h4 className="CardPokemon__types">
            {pokemonInfo?.types.map((type)=> type.type.name).join('/')}
        </h4>
        <h5 className="types">Types</h5>
        <hr />
        
            <ul className="conteinerStats">

           {
            pokemonInfo?.stats.map((stat)=>( 
            <li key={stat.stat.name}>
                
                <h5 className="name__stat">{stat.stat.name}</h5>
                <span className="number__stat">{stat.base_stat}</span>
                </li>
            ) )
           }
            </ul>
        
    </Link>
  )
}
export default PokemonPreview
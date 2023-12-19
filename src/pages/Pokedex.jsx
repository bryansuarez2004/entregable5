import { useSelector } from "react-redux"
import PokemonList from "../components/PokemonList"
import { useEffect, useState } from "react"
import axios from "axios"

const Pokedex = () => {

  const [allPokemons, setAllPokemons] = useState([])
  const [pokemonName, setpokemonName] = useState('')
  const [types, setTypes] = useState([])

  const trainerName = useSelector((store)=> store.trainerName.name)

   const pokemonsByName = allPokemons.filter((pokemon)=> pokemon.name.includes(pokemonName.trim()))

  const handleSubmit =(e)=> {
    e.preventDefault();
    setpokemonName(e.target.pokemonName.value.toLowerCase())
  };
   
  const handleChangeType =(e) => {
      const url = e.target.value;
      axios.get(url)
      .then(({ data }) => {
        
          if(url.includes('type')){
               const pokemonsFormat = data.pokemon.map((pokemon)=> pokemon.pokemon)
               setAllPokemons(pokemonsFormat);
          }else{
              setAllPokemons(data.results)
          }
      })
        .catch((err) => console.log(err));
  }


   useEffect(()=>{
         axios.get('https://pokeapi.co/api/v2/pokemon?limit=1292')
         .then(({ data }) => setAllPokemons(data.results))
        .catch((err) => console.log(err));
   },[]);

   useEffect(()=>{
         axios.get('https://pokeapi.co/api/v2/type')
         .then(({ data }) => setTypes(data.results))
        .catch((err) => console.log(err));
   },[])


  return (
    <section>
      <div className="conteinerHeader">
        <div className="textHeader">
           <img src="/image11.png" alt="" />
        </div>
        <div className="imgHeader">
            <img src="/headerpok.png" alt="" />
        </div>
      </div>
      <main>
        <p className="pTrainer"><b className="nameTrainer">Welcome {trainerName}</b> here can you find your favorite pokemon</p>

        <form className="ConteinerForm" onSubmit={handleSubmit}>
            <div className="ConteinerForm__search">
              <input className="ConteinerForm__textsearch" name="pokemonName" placeholder="Search pokemon..." type="text" />
              <button className="ConteinerForm__btn">Search</button>
            </div>
 
             <select className="ConteinerForm__types" onChange={handleChangeType}>
              <option value="https://pokeapi.co/api/v2/pokemon?limit=1292">All pokemons</option>
              {
                types.map((type)=>(
                <option value={type.url} key={type.name}>
                    {type.name}
                </option>
                ))
              }
             </select>

        </form>

         <PokemonList pokemons={pokemonsByName}  />
      </main>
    </section>
  )
}
export default Pokedex
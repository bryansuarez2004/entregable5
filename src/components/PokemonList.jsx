import { useEffect, useState } from "react"
import { paginatePokemons } from "../utils/pagination"
import Pagination from "./Pagination"
import PokemonPreview from "./PokemonPreview"

const PokemonList = ({pokemons}) => {
 const [currentPage, setCurrentPage] = useState(1)
   const {pokemonsInCurrentPage, lastPage, pagesInCurrentBlock,} = paginatePokemons(pokemons, currentPage)


  useEffect(()=>{
    setCurrentPage(1)
  },[pokemons])


  return (


    <section>
      <section className="ConteinerCardPokemons">
        {
            pokemonsInCurrentPage.map((pokemon)=> (
            <PokemonPreview key={pokemon.url} pokemonURL={pokemon.url} />
            ))
        }
    </section>
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} lastPage={lastPage} pagesInCurrentBlock={pagesInCurrentBlock} />
    </section>
  )
}
export default PokemonList
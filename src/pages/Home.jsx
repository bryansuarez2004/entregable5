import { useDispatch } from "react-redux"
import { setTrainerName } from "../store/slices/trainerName.slice"
import { useNavigate } from "react-router-dom";

const Home = () => {
 
   const dispatch = useDispatch();
   const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()

          dispatch(setTrainerName(e.target.trainerName.value))
        navigate('/pokedex')
    }




  return (
    <section className="initialPage">
        <div>
            <main className="mainContent">
                <header>
                    <img src="/image11.png" alt="" />
                </header>
                <div className="mainText">
                <h3 className="titleText">Hello trainer!</h3>
                <p>Write your name for start...</p>
                </div>
                 <form  onSubmit={handleSubmit} className="form">
                    <input 
                    autoComplete="off"
                    name="trainerName"
                    placeholder="your name..."
                    type="text" 
                    required />
                    <button type="submit" className="btnStart">Start</button>
                 </form>
            </main>
        </div>
        <footer className="initialPage__footerimg">
    <img className="imgfooter" src="/imagenfooterpokemon.jpg" alt="" />
        </footer>
    </section>
  )
}
export default Home
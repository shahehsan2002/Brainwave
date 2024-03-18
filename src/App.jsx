import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" >
        <Header></Header>
        <Hero></Hero>
        <Benefits></Benefits>
      </div>
      <ButtonGradient></ButtonGradient>
    </>
  )
}

export default App

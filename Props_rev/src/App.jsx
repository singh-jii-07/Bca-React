import './App.css'
import Card from './Components/Card'
import photo from '../src/assets/react.svg'
import Hero from './Components/Hero'

function App() {
 

  return (
    <div className='flex gap-6'>
      
      {/* <Card img={photo} name={"Nilesh singh"} role={"backend"}/>
      <Card img={photo} name={"Nilesh"} role={"backend"} />
      <Card img={photo} name={"Nilesh kumar"} role={"backend"}/>
      <Card img={photo} name={"Nilesh kumar singh"} role={"backend"}/> */}

      <Hero/>
    </div>
  )
}

export default App

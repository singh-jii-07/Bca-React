
import './App.css'
import Card from './Components/Card'
import image from '../src/assets/react.svg'

function App() {
    
  return (
   <div className='flex'>
    <Card name={'nilesh'}
    photo={image}
    dis={"hello im nilesh "}
    />
    <Card name={'rahul'}
    dis={"hello im rahul "}
    />
    <Card name={'sumit'}
    dis={"hello im sumit"}
    />
   </div>
  )
}

export default App

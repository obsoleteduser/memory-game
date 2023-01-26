import { useEffect, useState } from 'react'
import './App.css'

function App() {
 
 const [colors, setColors] = useState<string[]>([])


 useEffect(()=>{

  generateColors()
  console.log(colors)
  

 }, [])

 function generateColors():void{

  for(let i=0; i<4; i++){
    setColors(prev => [...prev, Math.floor((Math.random()*16777215)).toString(16)])
  }

  setColors(prev=>[...prev, ...prev])
  setColors(prev => shuffle(prev))

 }


 function shuffle(array:Array<string>) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}





  return (
    <div className="App">
      
      <div className="color-container">

        {
          colors.map((color, index) => (
            <div className="color" key={index} color={color} style={{backgroundColor: `#${color}`}}></div>
          ))
        }

      </div>

    </div>
  )
}

export default App

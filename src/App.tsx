import { FC, ReactElement, useEffect, useRef, useState } from 'react'
import './App.css'

interface ICompare{
  color: string,
  active: boolean
}


function App(){
 
 const [colors, setColors] = useState<string[]>([])
 const [colorActive, setColorActive] = useState<string[]>([])
 const [compare, setCompare] = useState<ICompare[]>([])
 console.log(colorActive)

 useEffect(()=>{

  setColors([])
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




const getColor = async (event: any) =>{
  
  event.stopPropagation()
  console.log(event.currentTarget.getAttribute('color'))
  setColorActive([...colorActive, event?.currentTarget?.getAttribute('color')!])
 
}


  return (
    <div className="App">
      
      <div className="color-container">

        {
          colors.map((color, index) => (
            <div onClick={getColor} className="color" key={index} color={`#${color}`} style={colorActive? {backgroundColor: `#${color}`}: {backgroundColor: 'black'}}></div>
          ))
        }

      </div>

    </div>
  )
}

export default App

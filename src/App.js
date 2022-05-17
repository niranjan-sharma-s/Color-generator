import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color,setColor] = useState('')
  const [errors , setErrors] = useState(false)
const [lists , setLists] = useState(new Values('#f15025').all(10))

const handleSubmit = (e) => {
  e.preventDefault()
  try {
    let colors = new Values(color).all(10)
    setLists(colors)
    
  } catch (error) {
    setErrors(true)
    console.log(error)
    
  }
 
}
  return (  
  <> 
  <section className='container'>
    <h3>Color Generator</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" value={color} onChange={(e)=> setColor(e.target.value)} placeholder='#f15025' className= {`${errors ? "error": null}`}/> 
    <button className="btn" type='submit'>Submit</button>
    </form>
    </section>
    <section className='colors'>
      {lists.map((color,index) => {
        return (
          <SingleColor key={index} {...color} index={index}/>
        )
      })}
    </section>
    </>
    )
}

export default App

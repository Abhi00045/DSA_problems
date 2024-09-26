import { useState } from 'react'
import Propsday from './day1props'

function App() {
  return (
    <>
    {/* muliple props */}
    <Propsday name="abhi" age={90} bool={true}/>
    <Propsday name="thar" age={39}  bool={false}/>



    {/* props using api */}
    
    </>
  )
}

export default App

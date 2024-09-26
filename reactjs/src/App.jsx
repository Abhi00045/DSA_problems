import { useState } from 'react'

function App() {
  const[poly, polyprem]=useState(0);

   polyprem(){
    poly+1;
    console.log(poly);  
  }
  return (
    <>
    <form>
     <label htmlFor="Name"></label> <input type="text" placeholder='Name' />
     <label htmlFor="Age"></label> <input  type="number" placeholder='Age' />
     <h1>Policie : {poly}</h1>
     
    </form>
    </>
  )
}

export default App

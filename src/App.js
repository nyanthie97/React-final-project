import React,{useEffect, useState} from 'react';
import './App.css';
import Beerlist from './Components/Beerlist';


function App() {
  const [beers,setBeers]=useState([])
  const []=useState(false)
  useEffect(()=>{
    fetch('https://api.punkapi.com/v2/beers')
    .then(r=>r.json())
    .then(beers=>setBeers(beers))
  },[])

  console.log(beers)
  return (
    <div className="App">
      <Beerlist beers = {beers}/>
    </div>
  );
}

export default App;

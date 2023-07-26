import { useState } from 'react';
import './App.css';
// axios used for GET requests
import axios from 'axios';

function App() {

  const [searchQuery, setSearchQuery] = useState("")
  const [img, setImg]= useState("")

  // can use event or e
  function handleSearch(event){
    // console.log("HERE")
    setSearchQuery(event.target.value)
    // console.log(searchQuery)

  }

  async function getImage(){
    try {  const API = `http://localhost:8090/photos?subject=${searchQuery}`
    const res = await axios.get(API)
    // console.log(res.data)
    //could get a random image in the array if wanted
    setImg(res.data[0].img_url)
    } catch(error){
      console.log(error)
    }

  }

  return (
    <div className="App">
      <h1>Find "any" image</h1>
      <input type='text' placeholder='enter image subject' onChange={handleSearch}/>
      <button onClick={getImage}>Explore!</button>
      {/* if img is true render <img...> */}
      {img && <img src={img} alt={searchQuery}></img>}
    </div>
  );
}

export default App;

import react , { useState } from 'react';
import Navbar from './components/Navbar';
import Axios from 'axios';

function App() {
  var options = {
    headers: {'Accept':'application/json'}
  }
  Axios.get('https://demo-blog.mashupstack.com/api/posts',options).then(response=>{
      // statements to execute on success response from api endpoint
      console.log(response.data)
  }).catch(error=>{
      // statements to execute on error response from api endpoint
      console.log(error)
  })
  return(
  <div>
    <Navbar/>
    <p>Home component </p>
  </div>
);
}

export default App;
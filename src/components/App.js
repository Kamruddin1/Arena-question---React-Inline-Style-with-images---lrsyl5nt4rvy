import React from 'react'
import '../styles/App.css';
import pic from '../NewtonSchool.jpg'
const App = () => {

  return (
    <div id="navbar">
      <div>NavBar</div>
      <img style={{width: '130px', height: '100px',margin: '10px'}} src={pic}/>
    </div>
  )
}


export default App;

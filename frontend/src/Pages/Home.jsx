import React from 'react'
import name from '../Assests/name-1714231_1280.png'
import '../Styles/Home.css'
import {useNavigate} from "react-router-dom"
const Home = () => {
  const navigate=useNavigate();
  return (
    
    <div className='home'>
        <div className='left'>
            <span>WELCOME</span>
            <h1>Create your database by clicking on the button</h1> 
              <button onClick={()=>navigate('/display')}>CREATE DATA</button>
        </div>
        <div className='right'>
          <div className='image'>
          <img src={name} alt='error'></img>
          </div>
        </div>
    </div>
    
  )
}

export default Home
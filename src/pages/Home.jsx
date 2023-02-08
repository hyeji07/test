import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();

  return (
    <div>
      <h3>welcome Home</h3>
      <div className='cursor-pointer' onClick={()=>{navigate('./login');}} style={{backgroundColor:'black', color:'#fff', width:'100px', height:'40px', lineHeight:'40px',textAlign:'center', fontWeight:'bold',cursor:'pointer' }}>
        Login  
      </div>
  </div>
  );
};

export default Home;
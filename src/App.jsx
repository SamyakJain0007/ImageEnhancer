import React from 'react'
import Home from './components/Home'
const App = () => {
  return (
    <div className='flex flex-col  min-h-screen items-center justify-center bg-gray-100 py-8 px-4'> 
     <div className='text-center mb-8'>
      <h1 className='text-5xl font-bold text-gray-800 mb-2'>AI IMAGE ENHANCER {" "}</h1>
      <p>  Upload your image and let AI enhance it to next level</p>
      </div> 
      <Home/>
      <div className='text-lg text-gray-500 mt-6'>
      Made by @Samyak_Jain   
      
      </div>
      
    </div>
  );
};
export default App
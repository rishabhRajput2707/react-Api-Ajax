import React from 'react'
import Services from './components/Services'
import Home from './components/Home'
import { Route , Routes , Link } from 'react-router-dom'
import Show from './components/Show'

const App = () => {
  
  
  

  // const addproducts = () => {
  //   const api = "https://fakestoreapi.com/products"

  //   axios.post(api, {
  //     title: 'test product',
  //     price: 13.5,
  //     description: 'lorem ipsum set',
  //     image: 'https://i.pravatar.cc',
  //     category: 'electronic'
  //   }).then((res)=>{
  //     console.log(res);
  //   }).catch((err)=> console.log(err)
  //   )
  // }
  return (

    <>
    <nav className='flex p-4  justify-center gap-10'>
      <Link to="/">Home</Link>
      <Link to="/show">Show</Link>
      <Link to="/services">Services</Link>
     </nav>
     <hr /><br />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/show' element={<Show/>}/>
      <Route path='/services' element={<Services/>}/>
     </Routes>
     
    </>
   
  )
}

export default App
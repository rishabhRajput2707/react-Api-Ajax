import axios from '../utils/axios'
import React, {  useEffect, useState } from 'react'

const Services = () => {
const [first, setfirst] = useState("this is normal data")
const [second, setsecond] = useState("this is large data")

  useEffect(()=>{
    addUser()
        console.log("Component is created");

        return(()=>{
            console.log("Component is deleted");
        });
        
    },[second])


    const addUser = () => {
  

      axios
      .get("users")
      .then((users) => {
          console.log(users);
      }).catch((err) => console.log(err))
  }
  return (
    <div className='p-4 '>
      <h1>{first}</h1>
    
      <button onClick={()=>setfirst("Normal data has beenn changed")} className='px-3 py-1 bg-red-300 rounded'>Change normal data</button>
      <br /> <br />
      <h1>{second}</h1>
      
      <button onClick={()=>setsecond("large data has beenn changed")} className='px-3 py-1 bg-blue-300 rounded'>Change large data</button>
    </div>

  )

}

export default Services
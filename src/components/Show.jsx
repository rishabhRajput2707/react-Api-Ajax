import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'


const Show = () => {
    const [products, setproducts] = useState([])
    console.log(products);

    useEffect(()=>{
        getproducts()
    },[])

    const getproducts = () => {

        axios.get("products").then((products) => {
            // console.log(products);
            setproducts(products.data)

        }).catch((err) => console.log(err))
    }
    return (
        <div>
            <div className='p-4'>
                {/* <button onClick={getproducts} className='px-2 py-1 bg-pink-300 rounded'>Get products</button>
                <br /><br /> */}
                {/* <button onClick={addproducts} className='px-2 py-1 bg-pink-300 rounded'>Add a new products</button> */}
               <hr /> <br />
                <ul>
                    {products.length > 0 ? products.map(p => <li key={p.id} className='w-full px-3 py-1 mb-2 bg-red-300 rounded '>{p.title}</li>) : <h1>Loading..</h1>}
                </ul>
            </div>
        </div>
    )
}

export default Show
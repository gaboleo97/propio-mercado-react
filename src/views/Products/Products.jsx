import React from 'react'
import { useEffect, useState } from "react"
import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer'
import './Products.css'
import { getProductById, getProducts, getProductos, getProductByCategory } from "../../data/asyncMock"
import axios, { Axios } from 'axios'
import { Link } from 'react-router-dom'

export const Products = () => {
    const [item, setItem] = useState([])
    const [category, setCategory] = useState('')

    useEffect(() => {
        
        getProductos()
            .then(res => setItem(res))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
      getProductByCategory()
            .then(res => setCategory(res))
            .catch(err => console.log(err))
    }, [])
  
    
    console.log("categoria:", category)
 
    // const [nuevo, setNuevo] = useState([])
    // useEffect(() => {
    //     axios('https://breakingbadapi.com/api/characters').then((res) => setNuevo(res.data)
    //     );
    // },[])
    // console.log("nuevo:",nuevo)
  
    // console.log("item:", item)
  return (
    <div className='container'>
        
        <ItemListContainer item='item.category'/>

         
    </div>
  )
}

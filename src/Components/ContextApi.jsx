import axios from 'axios';
import React, { useState } from 'react'
import { createContext, useEffect } from 'react'

const apiData = createContext();
const ContextApi = ({children}) => {

    let [apiInfo, setApiInfo] = useState([]);

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then((res)=> setApiInfo(res.data.products));
    }, []);

  return (
    <>
      <apiData.Provider value={apiInfo}> {children} </apiData.Provider>
    </>
  )
}

export {apiData, ContextApi};
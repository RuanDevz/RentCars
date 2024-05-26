import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import Context from '../../../useContext/Context'

const MeusCarros = () => {

    const {myid} = useContext(Context)

    useEffect(() =>{
        axios.get(`https://rent-cars-jdua.vercel.app/user/${myid}/cars`)
        .then((response) =>{
            console.log(response.data)
        })
    },[])
  return (
    <div>
      <h1>Meus carros</h1>
    </div>
  )
}

export default MeusCarros

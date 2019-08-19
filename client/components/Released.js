import React, { useState, useEffect, } from 'react'
import axios from 'axios'

const Released = () => {
  const [ didItDrop, setDidItDrop, ] = useState('No :(')

  useEffect(()=>{
    const checkIfYandhi = (album) => {
      if (album.collectionName === 'Yandhi') { return true }
    }

    const getData = async () => {
      const { data, } = await axios.get('/api/didYandhiDrop')
      if (data.results.filter(checkIfYandhi).length) { setDidItDrop('YES!!!') }
    }

    getData()
  }, [])

  return (
    <div className='response'>{didItDrop}</div>
  )
}

export default Released

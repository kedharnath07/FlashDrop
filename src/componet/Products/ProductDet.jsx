import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchapi from './Util'

function ProductDet() {
    let{id}=useParams()
    console.log(id)
    let [pro]=useFetchapi()
    console.log(pro[id])
  return (
    <div>ProductDet</div>
  )
}

export default ProductDet
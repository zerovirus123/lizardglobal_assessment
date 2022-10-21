import React from 'react'
import { useEffect } from 'react/cjs/react.development.js'

const API = () => {

    useEffect(() => {
        fetch("/api/posts")
        .then((response) => {
            let data = response.json()
            console.log(data)
        }) 
    }, [])

  return (
    <div>API</div>
  )
}

export default API
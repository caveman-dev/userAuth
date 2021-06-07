import axios from 'axios'
import React, { useState } from 'react'
import swal from 'sweetalert'


const SingleNote=(props)=>{
  const {selected}=props
  const [magic,setMagic]=useState('')
  
  axios.get(`https://dct-user-auth.herokuapp.com/api/notes/${selected}`,{
    headers:{'x-auth':localStorage.getItem('token')}})
      .then((response)=>{
        const result=response.data
        setMagic(result)
      })
return(
  swal(magic.title,magic.body)
)
}

export default SingleNote;

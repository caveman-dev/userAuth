import React, { useState } from 'react'
import NoteList from './NoteList'
import NoteForm from './NoteForm'


const NoteContainer=(props)=>{
    const[every, setEvery]=useState('')
    const handleEvery=(source)=>{
      setEvery(source)
    }
  // const[quotes,setQuotes]=useState([])
//   useEffect(()=>{
//       const result=(JSON.parse(localStorage.getItem('quotes'))||[])
//       setQuotes(result)
//   },[])
//   useEffect(()=>{
//       localStorage.setItem("quotes",JSON.stringify(quotes))

//   },[quotes])
//   const addItem=(quote)=>{
//       const result=[quote,...quotes]
//       setQuotes(result)
//   }
//   const removeItem=(i)=>{
//       const result1=quotes.filter((quote)=>{
//       return quote.id!==i
//   })
//   console.log(result1,'result')
// setQuotes(result1)
//   }

  return(
      <div><h2>NoteContainer</h2>
      <NoteList every={every} handleEvery={handleEvery}/>
      <NoteForm handleEvery={handleEvery}/>
      </div>

  )
}

export default NoteContainer
{/* <QuotesList quotes={quotes} removeItem={removeItem}/>
<AddQuote addItem={addItem} /> */}
import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import axios from 'axios'
const NotesForm=(props)=>{
    const {handleEvery}=props
    // const {formSubmission,id:slno,name:author,body:quote,handleToggle}=props
    // const [id,setId]=useState(slno ? slno : Number(new Date()))
    const[title,setTitle]=useState('')
    const[body,setBody]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title:title,
            body:body
        }
        //addItem(formData)
        axios.post("https://dct-user-auth.herokuapp.com/api/notes",formData,{
            headers:{'x-auth':localStorage.getItem('token')}})
            .then((response)=>{
            alert("completed")
            handleEvery(response.data)

        })
        .catch((err)=>{
            alert(err.message)
        })
        setTitle('')
        setBody('')
    }
    const handleTitleChange=(e)=>{
        setTitle(e.target.value)
    }
    const handleBodyChange=(e)=>{
        setBody(e.target.value)
    }
    return(
        <div>

            <form onSubmit={handleSubmit}>
                <label>Name</label><br/>
                <input type="text" onChange={handleTitleChange} value={title}/><br/>
                <label>Body</label><br/>
                <textarea  value={body} onChange={handleBodyChange}/>
                <input type="submit" value="save"/>
            </form>
        </div>
    )
}
export default NotesForm
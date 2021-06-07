import React,{useState,useEffect} from 'react'
import {Link,Route, withRouter} from 'react-router-dom'
import swal from 'sweetalert'
//import QuotesItem from './QuotesItem'
import axios from "axios"
import SingleNote from './SingleNote'
const NoteList=(props)=>{
    const{every,handleEvery}=props
    const [value,setValue]=useState("")
    const [selected,setSelected]=useState("")
    useEffect(()=>{
        axios.get("https://dct-user-auth.herokuapp.com/api/notes",{
            headers:{'x-auth':localStorage.getItem('token')}})
            .then((response)=>{
                console.log('errrr',response.data)
                setValue(response.data)
            })
           
    },[every])
    // useEffect(()=>{
    //     axios.delete(`https://dct-user-auth.herokuapp.com/api/notes$${selected}`,{
    //         headers:{'x-auth':localStorage.getItem('token')}})
    //         .then(()=>{
    //             handleEvery()
    //         })
    // },[selected])
    const handleDelete=(flag)=>{
        const result=window.confirm('are you sure?')
        if(result){
            axios.delete(`https://dct-user-auth.herokuapp.com/api/notes/${flag}`,{
                headers:{'x-auth':localStorage.getItem('token')}})
                .then((response)=>{
                    console.log(response.data)
                    handleEvery(response.data)
                })
            
     }
        }
    
    return(
        <div>
               {
            value.length===0?(
                <div>
                        <h1>No quotes found</h1>
                        <p>Add your first quote</p>
                    </div>
                ):(
                    <div>
                    <h1>My Notes-{value.length}</h1>
                
                    {
                        value.map((ele)=>{
                            return <div key={ele._id}><Link onClick={()=>{swal(ele.title,ele.body)}}  >
                                <p>{ele.title}</p><p>{ele.body}</p></Link> <button onClick={()=>{
                                   handleDelete(ele._id)
                                }}> delete</button><hr/></div>
                        })
                    }
                 
          
                    <Route path='/note/yo'  render={(props)=>{
        return<SingleNote
        {...props} //react dom sends additional props like history with this
        selected={selected}
        />
    }} ></Route>
                   
                    </div>
                   
                )
            }
        </div>)
         
    
    
}
export default NoteList
import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { API } from '../config/api';
import {useParams} from 'react-router-dom'
import BookData from '../components/BookData';

function Books() {
    const {id} = useParams()
    const [book,setBook] = useState([])
    const [data, setData] = useState([])
    const [q, setQ] = useState("")
    const [r, setR] = useState(0)
    const [state,setState] = useState(false)
   
    const getBook = async () => {
        try {
          const response = await API.get('/getbook/' + id );
          // Store product data to useState variabel
          setBook(response.data.data);
          console.log(response.data.data)
       
        
        } catch (error) {
          console.log(error);
        }
      };
      const search = (data) =>{
        return data.filter((data) => 
      data.title.toLowerCase().indexOf(q.toLowerCase()) > -1
      
    
        )
       
      }
      useEffect(()=>{
        getBook();
    },[])
 
  return (
    <Container>
       <h1 style={{marginLeft:"24px"}}> Books</h1>
        <input style=
        {{marginLeft:"24px", borderRadius:"8px", width:"250px", height:"30px" }} 
        type="text" value={q} onChange={(e) =>{setQ(e.target.value); console.log(q)}}
         placeholder='Search...'
         />

{/*         
          <select style={{marginLeft:"12px",background:"#1e3174",color:"#ffb703"}}
           name="cars" onChange={(e)=>{setState(true); setR(e.target.value); console.log(r)}}  id="cars">
           
              
               <option   value="0"  >0</option>
               <option   value="3"  >1</option>
               <option   value="2"  >2</option>
             
      
            </select>
            */}

              
      

        <BookData data={search(book)} />
        
    </Container>
  )
}

export default Books

const Container = styled.div`
    background:white;
    height:600px;
    width:1000px;
    border-radius:8px;
    margin-left:280px;
    margin-top:20px;
`

const ItemsBook = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
    width:100%;
    height:450px;
    margin-left:-5px;
    
   

`
    const Items = styled.div`
         height:210px;
    width:180px;
    margin-left:5px;
    margin-top:8px;
    `
const Item = styled.div`
    height:170px;
    width:170px;
    background:red;
    margin-left:8px;
    margin-top:8px;
  img{
    height:170px;
    width:170px;
  }  
  
`
const SpanBook = styled.div`
display:flex;
flex-direction:column;

`


import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import {Link,useNavigate} from 'react-router-dom'
import { API } from '../config/api';
function Category() {
    const [category, setCategory] = useState([]) 
    const navigate = useNavigate()
    const handleLink = (id) =>{
            navigate('/book/' + id)
    }
    const getCategory = async () => {
      try {
        const response = await API.get('/getcategory');
        // Store product data to useState variabel
        setCategory(response.data.data);
        console.log(response.data.data)
        
       
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(()=>{
        getCategory();
    },[])
  return (
   <Containers>
      
      <ItemsCategory>
    
        {category.map((item,index)=>(
             <Item  key={index} onClick={()=>{handleLink(item.id)}}><span>{item.name}</span></Item>
             
        ))}
      
     
       
       </ItemsCategory>
   </Containers>
  )
}

export default Category

const Containers  = styled.div`
    display:flex;
    
    align-items:center;
    
    background-color:white;
  width:700px;
  height:500px;
    border-radius:8px;
 
  margin-left:300px;
   

`
const ItemsCategory = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
 
    flex-wrap:wrap;
    height:250px;
    width:100%;
`

const Item = styled.div`
    background:#1e3174;
    color:#ffb703;
    border-radius:8px;
    height:20%;
    width:35%;
    margin-left:2px;
    margin-top:12px;
    display:flex;

   align-items:center;
   justify-content:center;
   cursor:pointer;
`
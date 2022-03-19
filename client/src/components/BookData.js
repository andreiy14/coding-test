import React, {useState} from 'react'
import styled from 'styled-components'
import ReactPaginate from "react-paginate";
import './BookData.css'
import useLocalStorage from '../hooks/useLocalStorage';
function BookData({data}) {
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 2;
    const pagesVisited = pageNumber * usersPerPage;

    const pageCount = Math.ceil(data.length / usersPerPage);
    
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const [bookmark, setBookmark] = useLocalStorage("listbook", [
   
   
  ]);
  const addBook = (id,title) => {
   
    const newBookmark = {
      id: id,
      title:title,
      
    };
    setBookmark([...bookmark, newBookmark ]);
  };
  return (
    <Container> 
        <BookList>
            <h3>Your Bookmark</h3>
        {bookmark.map((item)=>(
            <span>{item.title}</span>
        ))}
         
     </BookList>
         {data.slice(pagesVisited,pagesVisited + usersPerPage).map((item,index)=>(
            <Items key={index}>
           
            <Item>
            <img src={item.image} />
        </Item>
       <SpanBook >
       <span style={{marginLeft:"9px",fontSize:"10pt",fontWeight:"900"}} >{item.title} </span>
       <button onClick={()=>{ addBook(item.id,item.title)}} 
                style={{
                marginTop:"3px",
                background:"#1e3174",
                color:"#ffb703",
                border:"none",
                borderRadius:"4px",
                height:"20px",
                position:"relative"
               
            }}
       >B</button>
       </SpanBook>
      
        </Items>
            
             
            ))}
            
            
            <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
     
    </Container>
  )
}

export default BookData

const Container = styled.div`
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
const BookList = styled.div`
 
  display:flex;
 margin-top:12px;
 flex-direction:column;
 
`
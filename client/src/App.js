import React from 'react'
import './App.css';
import styled from 'styled-components'
import Category from './pages/Category';
import {Route, Routes, Switch} from 'react-router-dom';
import Books from './pages/Books';
function App() {
  return (
  
      <Container>
        <Header>
          <img src="https://lcdc.law.ugm.ac.id/wp-content/uploads/sites/822/2021/02/rsz_sejuta_cita.png" />
        </Header>
        <Routes>
        <Route exact path="/" element={<Category />} />
        <Route exact path="/book/:id" element={<Books />} />
        </Routes>
      </Container>
      
    
  );
}

export default App;
const Container = styled.div`
  height:100vh;
  width:100%;
  background-color:#1e3174;
  top:0;
 display:flex;
 flex-direction:column;
 justify-content:space-around;
  box-sizing: border-box;
  overflow:hidden;
`

const Header = styled.div`
  width:100%;
  background: #1e3174;
 margin-top:-22px;
 height:90px;
img{
  margin-top:30px;
  width:130px;
  margin-left:40px;
  border-radius:16px;
}

`
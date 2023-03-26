import React from 'react'
import styled from 'styled-components'
import HomeComponent from './modules/home'
 const Container=styled.div`
display:flex;
flex-direction:column;
font-family: 'Montserrat', sans-serif;
align-items:center;
margin:30px 0px 10px;
 `
 const Header=styled.span`
 color:black;
 font-size:25px;
 font-weight:bold;
 `
 function App() {
   return <Container>
    <Header>
      Expense Tracker
    </Header>
    <HomeComponent/> 
   </Container> 
 }
 
 export default App
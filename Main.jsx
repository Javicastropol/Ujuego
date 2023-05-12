import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/header/Header';
import JuegoPage from '../components/Categorias/JuegoPage';
import Footer from '../components/footer/Footer';

// import FormUser from  '../components/FormUser/FormUser';

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <JuegoPage/>
        {/* <FormUser/> */}
        <Footer/>
        
    </div>
  )
}

export default Main
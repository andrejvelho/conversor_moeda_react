import React from 'react';
import './index.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CaixaConversao from './components/Conversor/CaixaConversao';

function Home() {
    return (
        <>  
            <Header/>
            <div className="app">
                <CaixaConversao moeda1="USD" moeda2="BRL"/>
                <CaixaConversao moeda1="EUR" moeda2="BRL"/>
            </div>
            <Footer/>
        </>
    );
}

export default Home;
import '../App.css'
import React from 'react';
import LoginPage from './Login';
import NavbarComponent from './Navbar';

function Home(){
    return (
        <div className="App">
            <NavbarComponent  page='1' />
            <LoginPage></LoginPage>
    </div>
    );
};

export default Home;
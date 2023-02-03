import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import AllRecipes from './AllRecipes';
import Footer from './Footer';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <AllRecipes/>
            <Footer/>
        </div>
    );
};

export default Home;
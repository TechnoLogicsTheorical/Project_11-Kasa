import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/generics/Header/comp.jsx';
import Footer from '../components/generics/Footer/comp.jsx';

function Root() {
    return (
        <div className='App-Content'>
            <Header />
                <Outlet />
            <Footer />
        </div>
    )
}

export default Root;
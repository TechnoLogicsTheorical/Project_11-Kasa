import React from 'react';
import Header from '../components/generics/Header/comp.jsx';
import Footer from '../components/generics/Footer/comp.jsx';

function Root({children}) {
    return (
        <div className='App-Content'>
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Root;
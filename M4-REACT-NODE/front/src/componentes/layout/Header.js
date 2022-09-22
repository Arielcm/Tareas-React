import React from 'react';
import Nav from './Nav';

const Header = (props) => {
    return(
        <div className='text-bg-primary p-4'>
            <header id="header" className="fixed-top d-flex align-items-center header-ligth bg-ligth">
                <div className="container d-flex align-items-center justify-content-between">

                    <div className="class=link-dark">
                        <h1><span className="link-dark">Innovacion Digital</span></h1>
                    </div>
                    <Nav></Nav>
                </div>
            </header>
        </div>
    );
}

export default Header;
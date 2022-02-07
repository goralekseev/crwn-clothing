import React from 'react';
import './homepage.styles.css';

const HomePage = () =>(
    <div className = 'homepage'>
        <div className = 'directory-menu'>
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className=" title">Hats</h1>
                    <span className="subtiyle">SHOP NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className=" title">Jackets</h1>
                    <span className="subtiyle">SHOP NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className=" title">Sneackers</h1>
                    <span className="subtiyle">SHOP NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className=" title">Womens</h1>
                    <span className="subtiyle">SHOP NOW</span>
                </div>
            </div>
            <div className = 'menu-item'>
                <div className='content'>
                    <h1 className=" title">Men</h1>
                    <span className="subtiyle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
  
)

export default HomePage;
import React from 'react';
import './homepage.styles.css';

import { HomePageContainer } from './homepage.styles.js'

import Directory from '../../components/directory/directory.component';
const HomePage = () =>(
    <HomePageContainer>
        <Directory/>
    </HomePageContainer>
  
)

export default HomePage;
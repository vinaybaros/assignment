import React, { Component } from 'react';
import './App.css';

import Profile from './profile/profile'
import Menu from './menu/menu'
import MainPage from './content/main'

class App extends Component {
    render() { 
        
        return ( 
          <div className="App">
            
            <div className="leftWrapper">
                <Profile />
                <Menu />
            </div>
            <div className="contentWrapper">
                <MainPage />
            </div>
          </div>
        )
    }
}

export default App;
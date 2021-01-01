import React, {useState} from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import GlobalStyle from './globalStyles';
import Hero from './Components/Hero';
import { sliderData } from './data/SliderData'
import DropDown from './Components/DropDown'
import InfoSection from './Components/InfoSection';
import {InfoData} from './data/InfoData'
import ViewNewest from './Components/ViewNewest';
import { vnd } from './data/ViewNewestData'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <Router>
        <GlobalStyle/>
        <DropDown setIsOpen={setIsOpen} isOpen={isOpen}/>
        < Navbar setIsOpen={setIsOpen} />
        < Hero sliderData={sliderData} />
        < InfoSection {...InfoData}/>
        < ViewNewest viewNewestData = {vnd}/>

      </Router>    

      
  );
}

export default App;

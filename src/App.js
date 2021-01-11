import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import GlobalStyle from './globalStyles';
import DropDown from './Components/DropDown'
import Footer from './Components/Footer';
import { footerData } from './data/FooterData'
import Home from './Pages/Home'
import About from './Pages/About'
import Homes from './Pages/Homes'
import Rentals from './Pages/Rentals'



function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <Router>
        <GlobalStyle/>
        <DropDown setIsOpen={setIsOpen} isOpen={isOpen}/>
          {!isOpen && <Switch>
            <Route exact path='/about'>
              <About setIsOpen={setIsOpen}/>
            </Route>
            <Route exact path='/homes'>
              <Homes setIsOpen={setIsOpen}/>
            </Route>
            <Route exact path='/rentals'>
              <Rentals setIsOpen={setIsOpen}/>
            </Route>
            <Route path='/'>
              <Home setIsOpen={setIsOpen}/>
            </Route>
          </Switch>}
        
        {!isOpen && <Footer footerData = {footerData}/>}
        
        
        

      </Router>    

      
  );
}

export default App;

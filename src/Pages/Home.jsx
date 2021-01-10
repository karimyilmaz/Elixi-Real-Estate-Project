import React from 'react'
import {sliderData} from '../data/SliderData'
import {InfoData, InfoDataTwo} from '../data/InfoData'
import { vnd } from '../data/ViewNewestData'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import InfoSection from '../Components/InfoSection'
import ViewNewest from '../Components/ViewNewest'
import StunningInterior from '../Components/StunningInterior'


function Home(props) {
    
    return (
        <React.Fragment>
            < Navbar setIsOpen={props.setIsOpen} home/>
            < Hero sliderData={sliderData} />
            < InfoSection {...InfoData}/>
            < ViewNewest viewNewestData = {vnd}/>
            < StunningInterior />
            <InfoSection {...InfoDataTwo}/>
        </React.Fragment>
    )
}

export default Home

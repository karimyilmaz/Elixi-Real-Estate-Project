import React, {useLayoutEffect} from 'react'
import {sliderDataTwo} from '../data/SliderData'
import Hero from '../Components/Hero'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'

const RentalsSection = styled.div``

function Rentals(props) {
    useLayoutEffect(() => {
        window.scrollTo(0,0)
        
    }, [])

    return (
            <RentalsSection>
                < Navbar setIsOpen={props.setIsOpen}/>        
                <Hero sliderData={sliderDataTwo}/>            
            </RentalsSection>      
    )
}

export default Rentals

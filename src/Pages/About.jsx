import React, {useLayoutEffect} from 'react'
import styled from 'styled-components'
import StunningInterior from '../Components/StunningInterior'
import Navbar from '../Components/Navbar'

const AboutSection = styled.div``

function About(props) {
    useLayoutEffect(() => {
        window.scrollTo(0,0)
        
    }, [])

    return (
        <AboutSection>
            < Navbar setIsOpen={props.setIsOpen}/>
            <StunningInterior/>
        </AboutSection>        
    )
}

export default About

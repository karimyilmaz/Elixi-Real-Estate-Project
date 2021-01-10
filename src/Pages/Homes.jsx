import React, {useLayoutEffect} from 'react'
import styled from 'styled-components'
import ViewNewest from '../Components/ViewNewest'
import {vnd} from '../data/ViewNewestData'
import Navbar from '../Components/Navbar'

const HomesSection = styled.div``

function Homes(props) {
    useLayoutEffect(() => {
        window.scrollTo(0,0)
        
    }, [])

    return (
        <HomesSection>
            < Navbar setIsOpen={props.setIsOpen}/>
            <ViewNewest viewNewestData = {vnd} />           
        </HomesSection>
    )
}

export default Homes

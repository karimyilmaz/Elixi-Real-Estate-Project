import React from 'react'
import styled, {css} from 'styled-components'
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import { InView } from 'react-intersection-observer'

const ViewNewestSection = styled.section`
    width: 100%;
    height: 100%;
    padding-top:  0rem;
    padding-bottom: 4rem;
    
    @media only screen and (max-width: 711px){
        height: 1000px;
    }
`
const ViewNewestContainer = styled.div`
    padding: 3rem 4rem;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 950px){
        padding: 1rem 2rem;
    }
    

`
const Container = styled.div`
    display: flex;
    padding: 1rem 2rem;

    @media only screen and (max-width: 711px){
        flex-direction: column;
    }

`
const ColumnLeft = styled.div``
const ColumnRight = styled.div`
    padding: 5rem 1rem;
    
    @media only screen and (max-width: 711px){
        padding: 5rem 0rem;

    }
`
const New = styled.div`
    display: flex;
    flex-direction: column;
    opacity: 0;
    transition: 2.5s;
    transform: scale3d(2, 0.7, 0.2);

    h4 {
        margin-bottom: 10px;
    }

    ${(props) => (
        props.inview && css`
            opacity: 1;
            transform: none;
        `      
    )}

`

const ImageNewHome = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    margin-bottom: 10px;
`

const LinkOnNew = styled(Link)`
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 135px;
    font-size: .9rem;
`

const Heading = styled.h1`
    padding: 1rem 2rem;
    transition: 2.5s;
    opacity: 0;
    transform: scale3d(2, 0.7, 0.2);

    @media only screen and (max-width: 631px){
            font-size: 1.4rem;
    }

    ${(props) => (
        props.inview && css`
            opacity: 1;
            transform: none;
        `        
    )}

`

function ViewNewest({viewNewestData}) {
    
    return (
        <ViewNewestSection>
            <ViewNewestContainer>
               <InView>
                    {({inView, ref}) => {
                        return <Heading ref={ref} inview={inView}>View Our Newest Homes</Heading>
                    }}                   
               </InView> 
                <Container>
                    <ColumnLeft>
                        <InView>
                            {({inView, ref}) => {
                                return (
                                    <New ref={ref} inview={inView}>
                                        <ImageNewHome src={viewNewestData[0].image}/>
                                        <h4>{viewNewestData[0].desc}</h4>
                                        <LinkOnNew to='/details'>{viewNewestData[0].label} <FiArrowRight/></LinkOnNew>
                                    </New> 
                                )}}                   
                        </InView>
                    </ColumnLeft>
                    
                    <ColumnRight>
                        <InView>
                            {({inView, ref}) => {
                                return (
                                    <New ref={ref} inview={inView} second>
                                        <ImageNewHome src={viewNewestData[1].image}/>
                                        <h4>{viewNewestData[1].desc}</h4>
                                        <LinkOnNew to='/details'>{viewNewestData[0].label} <FiArrowRight/></LinkOnNew>
                                    </New> 
                                )}}                   
                        </InView>
                        
                    
                    </ColumnRight>

                </Container>
            </ViewNewestContainer>
        </ViewNewestSection>
    )
}

export default ViewNewest
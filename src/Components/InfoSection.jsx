import React from 'react'
import styled, {css} from 'styled-components'
import { Button } from './Button'
import { InView } from 'react-intersection-observer'


const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;

    @media only screen and (max-width: 950px){
        height: 1400px;

    }

    @media only screen and (max-width: 825px){
        height: 1200px;

    }

    @media only screen and (max-width: 579px){
        height: 1000px;

    }
    `


const Container = styled.div`
    padding: 3rem 4rem;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 950px){
        flex-direction: column;
        justify-content: center;
        padding: 1rem 2rem;

    }
`
const ColumnLeft = styled.div`
    flex-basis: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${(props) => (props.reverse? '2': '1')};

    h1 {
        margin-bottom: 25px;
        font-size: clamp(1.5rem, 6vw, 2rem)
    
        @media only screen and (max-width: 950px){
            margin-bottom: 15px;
        }
    }

    p{
        margin-bottom: 25px;
        font-size: .8rem;

        @media only screen and (max-width: 950px){
            margin-bottom: 15px;
        }
    }

    

    
`
const ColumnRight = styled.div`
    padding: 1rem 2rem;
    flex-basis: 45%;
    order: ${(props) => (props.reverse? '1': '2')};
    display: flex;
    justify-content: center;
    align-items: center;
    
    

    

    
`
const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    transition: 3s;
    opacity: 0;
    transform: scale(0.7);

    ${({inview}) => inview && 
        css`
            transform: none;
            opacity: 1;
        `
    };

    
    // @media only screen and (max-width: 950px){
        
    // }

    

`

const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, image, reverse}) => {
    

    return (
        <Section>
            <Container>
                <ColumnLeft reverse={reverse}>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button primary='true' to='/homes' small='true'>{buttonLabel}</Button>
                </ColumnLeft>
                
                <ColumnRight reverse={reverse}>
                    <InView>
                        {({inView, ref}) => {
                            return <HeroImage id='imago' ref={ref} inview={inView} src={image} alt="home"/>
                        }}
                    </InView>    
                </ColumnRight>


            </Container>
        </Section>
    )
}

export default InfoSection

import React from 'react'
import styled, {css} from 'styled-components'
import imageOne from '../Images/house_9.jpg'
import { Button } from './Button'
import { InView } from 'react-intersection-observer'


const StunningSection = styled.section`
    position: relative;
    width: 100%;
    height: 600px;
    background: #000;
    display: flex;
    align-items: center;
    
    @media only screen and (max-width: 750px) {
        flex-direction: column;
        height: 1000px;
    }
`
const StunningContainer = styled.div`
    color: #000;
    width: 100%;
    height: 60%;
    background: #fff;
    padding: 2rem 5rem;
    display: flex;
    flex-direction: column;
    

    @media only screen and (max-width: 750px) {
        height: 50%;
        color: #fff;
        background: #000;
        flex-direction: row;
        padding: 3rem 3rem;
        align-items: center;    
    }
    
`
const StunningImage = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    padding: 2rem 0rem;
    height: 85%;
    width: 40%;
    min-width: 300px;

    @media only screen and (max-width: 750px) {
        position: static;
        height: 50%;
        width: 100%;
        padding: 3rem 3rem; 
        transform: none;
    }

`
const Container = styled.div`
    position: absolute;
    top: 25%;
    width: 45%;
    height: 50%;
    opacity: 0;
    transition: 3s;
    transform: translate(-100px); 
  
    

    ${(props) => (props.inview && css`
        opacity: 1;
        transform: none;
    `)}

    h1{
        margin-bottom: 30px;
    }

    p {
        margin-bottom: 38px;

    }

    @media only screen and (max-width: 750px) {
        position: static;
        height: 50%;
        width: 100%;
        
    }
    
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 1px;
    object-fit:cover;
    transition: 3s;
    opacity: 0;
    transform: translate(100px);

    ${(props) => (
        props.inview && css`
           opacity: 1;
           transform: none;
        `
    )}
`

function StunningInterior() {
    return (
        <StunningSection>
            <StunningContainer>
                <InView>
                    {({inView, ref}) => {
                        return (<Container ref={ref} inview={inView}>
                            <h1>Stunning Interior</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id efficitur risus, sit amet volutpat turpis. <br/> Nam scelerisque elit at tellus vulputate mollis. Proin at mollis purus. Sed a leo tortor. </p>
                            <Button>Learn More</Button>
                        </Container>)
                    }}
                </InView>
            </StunningContainer>
            <StunningImage>
                    <InView>
                        {({inView, ref}) => <Image ref={ref} inview={inView} src={imageOne}/>}
                        
                    </InView>
            </StunningImage>
        </StunningSection>        
    )
}

export default StunningInterior

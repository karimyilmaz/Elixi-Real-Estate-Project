import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiFillInstagram } from 'react-icons/ai'
import { ImLinkedin2 } from 'react-icons/im'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'

const FooterSection = styled.section`
    width: 100%;
    height: 100%;
    padding: 1.5rem 4rem;
    background: rgb(17,17,17);
    color: #fff;
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    
    @media only screen and (max-width: 844px){
        align-items: center;
    }

    @media only screen and (max-width: 330px){
        padding: 1.5rem 3rem;
        


    }
    
    `
const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 2rem;

    @media only screen and (max-width: 844px){
        flex-direction: column;
        


    }
`    
const ContainerOne = styled.div`
    width: 50%;
    h1 {
        font-size: 2.8rem;

        @media only screen and (max-width: 844px){
            text-align: center;   
            
    
    
        }

        @media only screen and (max-width: 663px){
            font-size: 2.5rem;
    
            
        }
        
    }

    @media only screen and (max-width: 844px){
        width: 100%;   
        


    } 

    
    
`
const ContainerTwo = styled.div`
    
    display: flex;
    flex-direction: column;
    
    h5{
        margin-bottom: 15px;
    }
`
const ContainerThree = styled.div`
    margin-left: 90px;
    h5{
        margin-bottom: 15px;
    }

`
const ContainerLinks = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    p {

        margin-bottom: 3px;
        font-size: .8rem;
        cursor: context-menu;
    }
`
const FooterLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin-bottom: 3px;
    font-size: .8rem;
`
const ContainerRight = styled.div`
    width: 50%;
    display: flex;
    padding-top: 1.5rem;
    justify-content: flex-end;

    @media only screen and (max-width: 844px){
        width: 100%;   
        justify-content: space-around;
        padding: 1.5rem 2rem;
        


    } 
    
   
    
`
const SocialMediaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 30%;
    padding: 1rem 2rem;
    margin-top: 20px;
    color: #cd853f;
    font-size: 1.4rem;

    svg {
        cursor: pointer;
    }

    @media only screen and (max-width: 844px){
        padding: 1rem 0;
    }

    @media only screen and (max-width: 663px){
        width: 100%;
        padding: 1rem 2rem;

        
    }

    @media only screen and (max-width: 433px){
        padding: 1rem 0rem;

        
    }
`

function Footer({footerData: [contactUs, offices]}) {
    
    return (
        <FooterSection>
            <Container>
                <ContainerOne>
                    <h1>Let's find your Dream Home</h1>
                </ContainerOne>
                
                <ContainerRight>
                <ContainerTwo>
                    <h5>Contact Us</h5>
                    <ContainerLinks>
                        {   contactUs.map((data, index) => {
                                return <FooterLink key={index} to={data.to}>{data.label}</FooterLink>
                        })

                        }
                    </ContainerLinks>
                    
                </ContainerTwo> 
                <ContainerThree>
                    <h5>Offices</h5>
                    <ContainerLinks>
                        {   offices.map((data, index) => {
                                return <p key={index}>{data}</p>
                        })

                        }
                    </ContainerLinks>


                </ContainerThree>
                </ContainerRight>
            </Container>
            
            <SocialMediaContainer>
                <AiFillInstagram/>
                < ImLinkedin2 />
                < FaFacebookF />
                < AiFillYoutube />
            </SocialMediaContainer>                        
        </FooterSection>
    )
}

export default Footer

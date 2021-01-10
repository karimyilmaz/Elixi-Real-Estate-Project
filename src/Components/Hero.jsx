import React, {useState, useEffect, useRef} from 'react'
import styled, {css, keyframes} from 'styled-components/macro'
import { Button } from './Button'
import { FiArrowRight } from 'react-icons/fi';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'

const kf = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: none;
    }

`;

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    width: 100%;
    overflow: hidden;
    `
const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`
const HeroSlide = styled.div`
    z-index: 3;
    width: 100%;
    height: 100%;
`
const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    &::before{
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%);
    }
`
const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`
const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;
    

    p {
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
    
`
const Heading = styled.h1`
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    margin-bottom: 0.8rem;

    
`


const SliderButtons = styled.div`
   position: absolute;     
   bottom: 50px;
   right: 50px;
   display: flex;
   z-index: 80;
`


const arrowButtons = css`
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-right: 1rem;
    background: #000d1a;
    color: #fff;
    border-radius: 50px;
    padding: 10px;
    user-select: none;
    transition: 0.3s;

    &:hover{
        background: #cd853f;
        transform: scale(1.05);
    }
`

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
` 
const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`



function Hero({sliderData}) {
    let [heroSlidepos, setHeroSlidepos] = useState(0)
    let interval = useRef(null)
    
    const handleArrow = (arrow) => {
        window.clearInterval(interval.current)
        
        if(arrow === 'next'){
            setHeroSlidepos((prev) => {
                if(prev === sliderData.length - 1){
                    return 0
                }else{
                    return prev + 1
                }
                
            })
        }
        else{
            setHeroSlidepos((prev) => {
                if(prev === 0){
                    return sliderData.length - 1
                }else{
                    return prev - 1
                }
            })
        }

    }

    useEffect(() => {
       interval.current = window.setInterval(() => {
            setHeroSlidepos((prev) => {
                if(prev === sliderData.length - 1){
                    return 0
                }else{
                    return prev + 1
                }
            })
        }, 5000)
        
        return () => {
            clearInterval(interval)
        }
    }, [])
    
    

    return (
        <HeroSection>
            <HeroWrapper>

                    <HeroSlide>
                        <HeroSlider>
                            <HeroImage src={sliderData[heroSlidepos].image} alt={sliderData[heroSlidepos].alt}/>
                            <HeroContent css={`animation: ${kf} 2s;`}>
                                    <Heading>{sliderData[heroSlidepos].title}</Heading>
                                    <p>{sliderData[heroSlidepos].price}</p>
                                    <Button to={sliderData[heroSlidepos].path} primary='true' 
                                    css={`max-width: 190px;`}>
                                    {sliderData[heroSlidepos].label}
                                    <FiArrowRight/>
                                </Button>
                            </HeroContent>
                        </HeroSlider>
                    </HeroSlide>
            

                <SliderButtons>
                    <PrevArrow  onClick={() => handleArrow('prev')}/>
                    <NextArrow  onClick={() => handleArrow('next')}/>
                </SliderButtons>

            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero

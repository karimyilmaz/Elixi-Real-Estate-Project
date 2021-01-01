import React from 'react'
import styled from 'styled-components'
import {menuData} from '../data/MenuData'
import { Button } from './Button'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const DropDownContainer = styled.div`
    position: absolute;
    top: ${(props) => (props.isOpen? '0' : '-100%')};
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    padding: 3px 15px;
    background: #cd853f;
    display: flex;
    flex-direction: column;
    opacity: ${(props) => (props.isOpen? '1' : '0')}
    over-flow: hidden;
    transition: 0.3s ease-in-out;
`
const Icon = styled.div`
    width: 100%;
    text-align: right;
    padding: 1rem .5rem;
    outline: none; 
    background: transparent;
    `
const CloseIcon = styled(FaTimes)`
    cursor: pointer;
    font-size: 2rem;
    color: #000d1a;

    @media only screen and (max-width: 335px){
        font-size: 1.5rem;

    }

`
const DropDownWrapper = styled.div`
    height: 75%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const DropDownMenu = styled.div`
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    
`
const DropDownLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #000d1a;
    }
    `
const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

const DropDown = ({setIsOpen, isOpen}) => {
    return (
        <DropDownContainer isOpen={isOpen} onClick={() => setIsOpen(false)}>
            <Icon>
                <CloseIcon onClick={() => setIsOpen(false)}/>
            </Icon>
            <DropDownWrapper>
                <DropDownMenu>
                    {menuData.map((item, index) => {
                        return <DropDownLink to={item.link} key={index}>{item.title}</DropDownLink>
                    })}
                </DropDownMenu>
                <BtnWrap>
                    <Button primary big round to='/contact'>Contact Us</Button>
                </BtnWrap>
            </DropDownWrapper>
        </DropDownContainer>        
    )
}

export default DropDown

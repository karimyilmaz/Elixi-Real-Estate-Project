import React, { useEffect, useState } from 'react'
import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'
import {menuData} from '../data/MenuData'
import { Button } from './Button'
import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
    padding: .8rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;

    ${(props) => (props.showBg && css` background: #cd853f;`)}

    // background: ${(props) => (props.showBg? '#cd853f': 'transparent')};
    transition: background 2s;
    `
const Logo = styled(Link)`
    font-style: italic;
    color: #fff;
    text-decoration: none;
`
const MenuBars = styled(FaBars)`
    display: none;
    cursor: pointer;

    @media only screen and (max-width: 768px){
        display: block;
    }

`

const NavMenu = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: -48px;

    @media only screen and (max-width: 768px){
        display: none;
    }

    `
const NavMenuLinks = styled(Link)`
    text-decoration: none;
    color: #fff;
`
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-width: 768px){
        display: none;
    }
    
    `

const Navbar = ({setIsOpen, home}) => {
    let [showBg, setShowBg] = useState(home? false : true)
    
    useEffect(() => {
        if(home){
        window.addEventListener('scroll', () => {
            if(window.scrollY === 0)
                setShowBg(false)
            else
                setShowBg(true)

        }, {passive: true}) 
    
        
    }

    }, [])
    
    
    return (
        <Nav showBg={showBg}>
            <Logo to='/'>ELIXI</Logo>
            <MenuBars onClick={() => setIsOpen(true)}/> 
            <NavMenu> 
                {menuData.map((item, index) => {
                    return <NavMenuLinks key={index} to={item.link}>{item.title}</NavMenuLinks>
                })}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar

import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    background: ${(props) => (props.primary? '#000d1a': 'CD853F')};
    text-decoration: none;
    border: none;
    border-radius: ${(props) => (props.round? '30px': '0px')};
    min-width: 100px;
    max-width: ${(props) => (props.small? '150px': '200px')};
    cursor: pointer;
    white-space: nowrap;
    outline: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: ${(props) => (props.big? '16px 40px': '14px 24px')};
    color: ${(props) => (props.primary? '#fff': '#000d1a')};
    font-size: ${(props) => (props.big? '20px': '14px')};

    &:hover{
        transform: translateY(-2px);
    }
    `

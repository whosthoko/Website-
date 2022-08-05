import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

//react icons
import {GrClose, GrMenu, } from 'react-icons/gr';
import { FaUserAlt } from "react-icons/fa"; 
import { AiFillShopping } from "react-icons/ai";

//logo
import logo from '../images/Logo.png';


function Navbar() {
    const [menuState, setMenuState] = useState(false);

    const openMenu = () => setMenuState((prevState) => !prevState);

    const menuIconStyle = {
        fontSize: '2rem',
        padding: '5px',
        position: 'absolute',
        top: 10,
        right: 25,
        background: 'white',
        borderRadius: '5px',


    }
    return (
    <StyledNavbar>
        <div className="mobile-buttons">
            {menuState ? (
            <GrClose style={menuIconStyle} onClick={openMenu}/> 
            ) : (
            <GrMenu style={menuIconStyle} onClick= {openMenu} />
            )}
        </div>

         <div className='logo'>
            <Link to ="/"> <img src={logo} alt="SNST BLVD Logo" /></Link>
            </div>
        <ul className={menuState ? 'show' : 'hide'}>
            <li>
                <Link to='Mens' onClick={openMenu} >Mens</Link>
            </li>
            <li>
                <Link to='Womens' onClick={openMenu} >Womens</Link>
            </li>
            <li>
            <Link to='OurCanvas' onClick={openMenu} >Our Canvas</Link>
            </li>
            <li>
                <Link to='ShoppingBag' onClick={openMenu} ><AiFillShopping size={'1.4rem'}/></Link>
            </li>
            <li>
                <Link to='Login' onClick={openMenu} ><FaUserAlt/></Link>
            </li>
        </ul>
        
    </StyledNavbar>
   
    );  
}

const StyledNavbar = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    height: 50px;
    z-index: 1;
    background-color: ${({theme}) => theme.colors.black};
    width: 100%;

    .logo, 
    .hide{
        display: none;
    }

    .show{
        display: block;
    }

    ul{
        position: absolute;
        top: 60px;
        right: 25px;
        background-color: ${({theme}) => theme.colors.black};
        padding: 20px;
        border-radius: 10px;
    

    li{
        list-style: none;
        margin-bottom: 10px;
        cursor: pointer;

    a{
        text-decoration: none;
        font-size: 1.1rem;
        color: ${({theme}) => theme.colors.white};
        }

    &:hover{
        opacity: 0.6;
    }
    }
 }
    @media only screen and (min-width: ${({theme}) => theme.mobile.xSmall}) {
        .mobile-buttons {
            display: none;
        }
        .logo {
            display: block;
            padding-top: 10px;
            margin-left: 20px;
       

        a{
            display: flex;
            align-items: center;
            text-decoration: none;

            img{
            background-color: none;
            width: 300px;
            border-radius: 5px;
            padding: 1px;
            margin-right: 10px;
            position: relative;
            top: -94px;
            left: -23px;
           

                }
       
            }
        }
    
    ul{
        top: 0;
        background-color: transparent;
        padding: 0;
        margin-top: 10px;
    
    li{
        margin: 0 10px;
    }
    }

    .hide,
    .show{
        display: block;
        display: flex;
    }
    }
`;

export default Navbar;
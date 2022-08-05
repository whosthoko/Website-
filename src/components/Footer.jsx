import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//icons
import{ FaInstagram } from "react-icons/fa"; 

function Footer() {
    return (
      <StyledFooter>
        <section>
        <div>
             <div className="support">
            <ul>
              <h2 className="supportheading">Support</h2>
              <li> <Link to='' >FAQ</Link> </li>
              <li> <Link to='' >Shipping</Link> </li>
              <li> <Link to='' >Payment</Link> </li>
              <li> <Link to='' >Track Orders</Link> </li>
              <li> <Link to='' >Returns</Link> </li>
            </ul>
        </div>
        <div className="support">
          <ul>
              <h2 className="snstblvdheading">SNST BLVD</h2>
              <li> <Link to='' >Our Canvas</Link> </li>
              <li> <Link to='' >Privacy Policy</Link> </li>
            </ul>
        </div>
        <div className="support">
          <ul>
              <h2 className="contactusheading">Contact Us</h2>
              <li>  <Link to=''>Email</Link> </li>
            </ul>
        </div>
        <div className="support">
        <ul>
          <h2 className="socialmedia">Social Media</h2>
          <li className="insta"><a href="https://www.instagram.com/snstxblvd/" target="_blank" rel="noreferrer"><FaInstagram size={'3rem'} /> </a> </li>
        </ul>
      </div>
        </div>
        </section>
        </StyledFooter>
    );
}
const StyledFooter = styled.div`
 background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(52,0,0,1) 12%, rgba(115,0,0,1) 62%);

.support {
  flex: 1;
  text-align: left;
  display: inline-block;
  float: left;
  margin: 14vh;
}

.support ul li {
  list-style: none;
  display: block;
  padding-bottom: 15px;
  position: relative;
}

.support ul li a {
  color: white;
  text-decoration: none;
}
.supportheading {
  color: ${({theme}) => theme.colors.white};
  margin-bottom: 5vh;
  margin-top: -10vh;
  text-align: center
  }
  
  .snstblvdheading {
    color: ${({theme}) => theme.colors.white};
    margin-bottom: 5vh;
    margin-top: -10vh;
    text-align: center
    }
  
  .contactusheading {
    color: ${({theme}) => theme.colors.white};
      margin-bottom: 5vh;
      margin-top: -10vh;
      text-align: center
  }
  
  .snstblvdheading {
    color: ${({theme}) => theme.colors.white};
    margin-bottom: 5vh;
    margin-top: -10vh;
    text-align: center
    }
  
  .socialmedia {
    color: ${({theme}) => theme.colors.white};
    margin-bottom: 5vh;
    margin-top: -10vh;
    text-align: center
    }
  
  .insta {
    text-align: center;
  }

  .FaInstagram {
    size: 10000px;
  }

  `;
export default Footer;
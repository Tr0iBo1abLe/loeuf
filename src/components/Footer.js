import React from 'react';
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`

const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
`

const Button = styled.button`
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600; 
    font-size: 24px;
    justify-self: center;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        transform: translateY(-3px);
    }
`

const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    a {
        transition: 0.3s;
    }

    a:hover {
        color: black;
    }
`

const Copyright = styled.div`
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
`

const Footer = ({ data, children }) => (
    <FooterGroup>
        <Text>This Cafe is one of the bombest cafes you could ever eat at. Seriously!</Text>
        <Button>Reccomend</Button>
        <LinkGroup>
            {data.allContentfulLink.edges.map(edge => (
                <a href={edge.node.url}>{edge.node.title}</a>
            ))}
        </LinkGroup>
        <Copyright>
            {children}
        </Copyright>

    </FooterGroup>
)

export default Footer;
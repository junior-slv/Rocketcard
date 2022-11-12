import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
` 
export const StyledButton = styled.button`
    padding: 16px 32px;
    background: #000;
    border-radius: 15px;
    color: #fff;
` 
export const Container = styled.div`
    margin: 0;
    display: flex;

`
export let LeftMenu = styled.div`
    width: 100vw;
    height: 100vh;
    background: #3B3486;
    display: none;
    align-items: center;
    justify-content: center;
`

export const RightMenu = styled.div`
    width: 100vw;
    height: 100vh;
    background: #3B3486;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;

`
export const CardBackground = styled.div`
    width: 50%;
    height: 85%;
    border-radius: 45px;
    -webkit-box-shadow: 0px 0px 42px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 42px -1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 42px -1px rgba(0,0,0,0.75);
    background: #7DE5ED;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Card = styled.div`
    width: 80%;
    height: 90%;
    border-radius: 45px;
    border: 1px solid #000;
    background #3B3486;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`
export const P = styled.p`
    color: #fff;
`
export const Iconsvg = styled.img`

`
export const AvatarIMG = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 15px;
    border: 2px solid #7DE5ED;
    overflow: hidden;
`
export const Infos = styled.div`
    color: #fff;
    background-color: rgba(0,0,0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    border-radius: 15px;
    width: 212px;
    height: 202px;
`

export default function Display(){
    LeftMenu = styled.div`
    width: 100vw;
    height: 100vh;
    background: #3B3486;
    display: flex;
    align-items: center;
    justify-content: center;
`
}
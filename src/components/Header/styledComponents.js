import styled from 'styled-components'

export const HeaderBackgroundContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`

export const HeaderContent = styled.div`
  width: 90%;
  margin-top: 16px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WebSiteLogo = styled.img`
  width: 140px;
`

export const HeaderMenu = styled.div`
  display: flex;
`
export const CustomButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 10px;
`

export const HamburgerButton = styled(CustomButton)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogOutIcon = styled(CustomButton)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogOutButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    border: 1.5px solid #3b82f6;
    color: #3b82f6;
    background: none;
    cursor: pointer;
    margin-left: 10px;
    height: 30px;
    width: 80px;
    border-radius: 3px;
    font-weight: bold;
    font-family: Roboto;
  }
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 32px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

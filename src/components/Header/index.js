import {FaMoon, FaBars} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

import {
  HeaderBackgroundContainer,
  HeaderContent,
  WebSiteLogo,
  HeaderMenu,
  CustomButton,
  HamburgerButton,
  LogOutIcon,
  ProfileImage,
  LogOutButton,
} from './styledComponents'

const Header = () => {
  const renderHeaderMenu = () => (
    <HeaderMenu>
      <CustomButton type="button">
        <FaMoon size={30} />
      </CustomButton>
      <ProfileImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
        alt="profile"
      />
      <LogOutButton type="button">Logout</LogOutButton>
      <HamburgerButton type="button">
        <FaBars size={30} />
      </HamburgerButton>
      <LogOutIcon type="button">
        <FiLogOut size={30} />
      </LogOutIcon>
    </HeaderMenu>
  )

  return (
    <HeaderBackgroundContainer>
      <HeaderContent>
        <WebSiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        {renderHeaderMenu()}
      </HeaderContent>
    </HeaderBackgroundContainer>
  )
}

export default Header

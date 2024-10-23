import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import {
  SideBarContainer,
  SideMenu,
  MenuItem,
  MenuText,
  ContactInfoContainer,
  ContactText,
  MediaLogosContainer,
  SocialMediaImage,
  ContactInfoDescription,
} from './styledComponents'

class SideBar extends Component {
  state = {
    isClicked: false,
  }

  updateIsClicked = () => {
    this.setState({isClicked: true})
  }

  renderContactInformation = () => (
    <ContactInfoContainer>
      <ContactText>CONTACT US</ContactText>
      <MediaLogosContainer>
        <SocialMediaImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <SocialMediaImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <SocialMediaImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </MediaLogosContainer>
      <ContactInfoDescription>
        Enjoy! Now to see your channels and recommendations!
      </ContactInfoDescription>
    </ContactInfoContainer>
  )

  render() {
    const {isClicked} = this.state

    return (
      <SideBarContainer>
        <SideMenu>
          <Link to="/" style={{textDecoration: 'none'}}>
            <MenuItem onClick={this.updateIsClicked} active={isClicked}>
              <AiFillHome size={26} color="#64748b" />
              <MenuText>Home</MenuText>
            </MenuItem>
          </Link>
          <Link to="/trending" style={{textDecoration: 'none'}}>
            <MenuItem onClick={this.updateIsClicked} active={isClicked}>
              <AiFillFire size={26} color="#64748b" />
              <MenuText>Trending</MenuText>
            </MenuItem>
          </Link>
          <Link to="/gaming" style={{textDecoration: 'none'}}>
            <MenuItem onClick={this.updateIsClicked} active={isClicked}>
              <SiYoutubegaming size={26} color="#64748b" />
              <MenuText>Gaming</MenuText>
            </MenuItem>
          </Link>
          <Link to="/saved-videos" style={{textDecoration: 'none'}}>
            <MenuItem>
              <CgPlayListAdd size={26} color="#64748b" />
              <MenuText>Saved videos</MenuText>
            </MenuItem>
          </Link>
        </SideMenu>
        {this.renderContactInformation()}
      </SideBarContainer>
    )
  }
}

export default SideBar

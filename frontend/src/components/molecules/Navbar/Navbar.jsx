import styled from "styled-components";
import Avatar from "../../atoms/Avatar/Avatar";
import {Bell} from "react-bootstrap-icons";
import LogoImage from "../../../assets/images/logo/logo.png";
import {NavLink} from "react-router-dom";

const Wrapper = styled.div`
  height: 80px;
  width: 100vw;

  background-color: #263238;
  box-shadow: 0 11px 24px 0 rgba(66, 68, 90, 1);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`

const AvatarWrapper = styled.div`
  height: 60px;
  width: 60px;
`

const Notifications = styled.div`
  width: 60px;
  font-size: 40px;
  color: white;
`

const MenuWrapper = styled.div`
  position: absolute;
  max-width: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: 60px;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
`

const Logo = styled.div`
  width: 80px;
  height: 60px;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 10px;
  left: 50px;
`

const Navbar = () => (
    <Wrapper>
        <NavLink exact to={"/"}>
            <Logo url={LogoImage}/>
        </NavLink>
        <MenuWrapper>
            <Notifications>
                <Bell/>
            </Notifications>
            <AvatarWrapper>
                <Avatar url={"https://picsum.photos/200/200"}/>
            </AvatarWrapper>
        </MenuWrapper>

    </Wrapper>
);

export default Navbar;
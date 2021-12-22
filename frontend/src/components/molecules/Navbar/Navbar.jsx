import styled from "styled-components";
import NavButton from "../../atoms/nav-button/NavButton";
import { Eye, HouseFill } from "react-bootstrap-icons";

const Wrapper = styled.nav`
  height: 100vh;
  width: 80px;
  background-color: #263238;
`;

const IconsWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: grid;
    row-gap: 40px;
`;

const Navbar = () => (
  <Wrapper>
    <IconsWrapper>
      <NavButton Icon={HouseFill} color={"#F57C00"} isActive></NavButton>
      <NavButton Icon={Eye} color={"#F57C00"}></NavButton>
    </IconsWrapper>
  </Wrapper>
);

export default Navbar;

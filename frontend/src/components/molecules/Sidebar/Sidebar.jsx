import styled from "styled-components";
import NavButton from "../../atoms/nav-button/NavButton";
import {Eye, HouseFill} from "react-bootstrap-icons";

const Wrapper = styled.nav`
  height: 100vh;
  width: 80px;
  
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  
  background-color: #263238;
`;

const IconsWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  row-gap: 40px;
`;

const Sidebar = () => (
    <Wrapper>
        <IconsWrapper>
            <NavButton Icon={HouseFill} color={"#F57C00"} isActive/>
            <NavButton Icon={Eye} color={"#F57C00"}/>
        </IconsWrapper>
    </Wrapper>
);

export default Sidebar;

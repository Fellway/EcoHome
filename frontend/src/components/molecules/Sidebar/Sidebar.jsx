import styled from "styled-components";
import NavButton from "../../atoms/nav-button/NavButton";
import {BarChartFill, Eye, HouseFill} from "react-bootstrap-icons";
import {NavLink} from "react-router-dom";

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
            <NavLink exact to={"/"}>
                <NavButton Icon={BarChartFill} color={"#F57C00"}/>
            </NavLink>
            <NavLink exact to={"/rooms"}>
                <NavButton Icon={HouseFill} color={"#F57C00"}/>
            </NavLink>
        </IconsWrapper>
    </Wrapper>
);

export default Sidebar;

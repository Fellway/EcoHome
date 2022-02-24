import styled from "styled-components";
import NavButton from "../../atoms/nav-button/NavButton";
import {BarChartFill, HouseFill, Sun} from "react-bootstrap-icons";
import {NavLink, useLocation} from "react-router-dom";

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

const Sidebar = () => {

        const location = useLocation();

        return (<Wrapper>
            <IconsWrapper>
                <NavLink exact to={"/"}>
                    <NavButton isActive={location.pathname === '/'} Icon={BarChartFill} color={"#F57C00"}/>
                </NavLink>
                <NavLink exact to={"/rooms"}>
                    <NavButton isActive={location.pathname === '/rooms'} Icon={HouseFill} color={"#F57C00"}/>
                </NavLink>
                <NavLink exact to={"/solar-system"}>
                    <NavButton isActive={location.pathname === '/solar-system'} Icon={Sun} color={"#F57C00"}/>
                </NavLink>
            </IconsWrapper>
        </Wrapper>)
    }
;

export default Sidebar;

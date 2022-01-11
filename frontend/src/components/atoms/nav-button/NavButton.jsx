import styled from "styled-components";

const Wrapper = styled.button`
  position: relative;
  height: 40px;
  padding: 5px 0;
  width: 80px;
  border: none;
  background-image: url(${({ icon }) => icon});
  background-size: auto 75%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: #263238;
  cursor: pointer;

  &:after {
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    content: "";
    width: 4px;
    height: 40px;
    background-color: ${({ color, isActive }) => (isActive ? color : "white")};
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 30px;

  &:first-child {
    font-size: 30px;
  }
`;

const NavButton = ({ isActive, Icon, color }) => (
  <Wrapper isActive={isActive} color={color}>
    <IconWrapper>
      {isActive ? <Icon color={color}/> : <Icon color={"white"}> </Icon>}
    </IconWrapper>
  </Wrapper>
);

export default NavButton;

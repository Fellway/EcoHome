import styled from "styled-components";

const Header = styled.text`
  display: block;
  font-size: 1.4rem;
  font-family: 'Roboto', sans-serif;
  color: #435b62;
  text-align: center;
  text-transform: ${({uppercase}) => uppercase ? "uppercase" : "none"};
  letter-spacing: ${({uppercase}) => uppercase ? "2px" : "0"};
`

export default Header;
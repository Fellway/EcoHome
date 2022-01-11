import styled from "styled-components"

const IconButton = styled.button`
  width: 200px;
  height: 40px;
  padding-left: 50px;

  text-overflow: ellipsis;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;

  background-image: url(${({icon}) => icon});
  background-position: 17px 10px;
  background-size: 20px;
  background-repeat: no-repeat;

  transition: 0.5s;

  border-radius: 10px;
  border-style: none;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export default IconButton;
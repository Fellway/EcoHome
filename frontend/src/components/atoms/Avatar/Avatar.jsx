import styled from "styled-components";

const Avatar = styled.div`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default Avatar;
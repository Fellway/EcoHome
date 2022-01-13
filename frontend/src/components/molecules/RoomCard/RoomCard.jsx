import styled from "styled-components";
import Text from "../../atoms/text/Text";
import SubText from "../../atoms/subtext/SubText";

const Wrapper = styled.button`
  height: 150px;
  width: 150px;
  background-color: black;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  transition: .3s;

  position: relative;

  & > Text {
    text-shadow: 0 0 4px #000000;
    position: relative;
    z-index: 1;
  }

  &:hover {

    background-color: #ffcc80;

    > Text {
      text-shadow: none;
      color: black;
    }
  }

  > Text {
    margin-bottom: 10px;
  }
`

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  background-image: ${({img}) => `url(${img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
  border-radius: 5px;

  &:hover {
    background-image: none;
  }
`

const RoomCard = ({title, subtext, img}) => (
    <Wrapper>
        <BackgroundImage img={img}>

        </BackgroundImage>
        <Text>
            {title}
        </Text>
        <SubText>
            {subtext}
        </SubText>
    </Wrapper>
);

export default RoomCard;
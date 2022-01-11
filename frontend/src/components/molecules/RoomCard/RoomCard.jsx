import styled from "styled-components";
import Text from "../../atoms/text/Text";
import SubText from "../../atoms/subtext/SubText";

const Wrapper = styled.div`
  height: 150px;
  width: 150px;
  background-color: black;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;

  cursor: pointer;
  transition: .3s;

  &:hover {
    background-color: #ffcc80;
    > Text {
      color: black;
    }
  }

  > Text {
    margin-bottom: 10px;
  }
`

const RoomCard = ({title, subtext}) => (
    <Wrapper>
        <Text>
            {title}
        </Text>
        <SubText>
            {subtext}
        </SubText>
    </Wrapper>
);

export default RoomCard;
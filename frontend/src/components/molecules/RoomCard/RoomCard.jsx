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
`

const RoomCard = ({}) => (
    <Wrapper>
        <Text>
            Bathroom
        </Text>
        <SubText>
            2 devices active
        </SubText>
    </Wrapper>
);

export default RoomCard;
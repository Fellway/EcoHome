import Text from "./Text"
import styled from "styled-components"

export default {
    title: 'EcoHome/atoms/Text',
    component: Text
}

const Background = styled.div`
    height: 50px;
    width: 150px;
    background-color: black;
`

const Template = () =>
    <Background>
        <Text>Bathroom</Text>
    </Background>

export const PrimaryText = Template.bind({});
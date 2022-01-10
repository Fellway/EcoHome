import SubText from "./SubText"
import styled from "styled-components"

export default {
    title: 'EcoHome/atoms/SubText',
    component: SubText
}

const Background = styled.div`
    height: 50px;
    width: 150px;
    background-color: black;
`

const Template = () =>
    <Background>
        <SubText>Bathroom</SubText>
    </Background>

export const SecondaryText = Template.bind({});
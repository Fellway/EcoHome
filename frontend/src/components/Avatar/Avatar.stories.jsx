import {default as AvatarComponent} from "./Avatar"
import styled from "styled-components"

export default {
    title: 'EcoHome/atoms/Avatar',
    component: Text
}

const Background = styled.div`
  height: 100px;
  width: 100px;
  background-color: black;
`

const Template = (args) => (
    <Background>
        <AvatarComponent {...args} />
    </Background>
)


export const Avatar = Template.bind({});
Avatar.args = {
    url: "https://picsum.photos/200/200"
}